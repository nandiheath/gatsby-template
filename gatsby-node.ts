exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  // Sometimes, optional fields tend to get not picked up by the GraphQL
  // interpreter if not a single content uses it. Therefore, we're putting them
  // through `createNodeField` so that the fields still exist and GraphQL won't
  // trip up. An empty string is still required in replacement to `null`.
  // eslint-disable-next-line default-case
  switch (node.internal.type) {
    case 'MarkdownRemark': {
      const { permalink, layout, primaryTag } = node.frontmatter;
      const { relativePath } = getNode(node.parent);

      let slug = permalink;

      if (!slug) {
        slug = `/${relativePath.replace('.md', '')}/`;
      }

      // Used to generate URL to view this content.
      createNodeField({
        node,
        name: 'slug',
        value: slug || '',
      });

      // Used to determine a page layout.
      createNodeField({
        node,
        name: 'layout',
        value: layout || '',
      });

      createNodeField({
        node,
        name: 'primaryTag',
        value: primaryTag || '',
      });
    }
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions;
  const blogPostTemplate = require.resolve(`./src/templates/post.tsx`);
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { fileAbsolutePath: { regex: "//posts//" } }
      ) {
        edges {
          node {
            fileAbsolutePath
            excerpt(format: HTML)
            frontmatter {
              title
              slug
              tags
              date
              categories
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // key: tag, value: post
  const tagsMap = {};

  // key: category, value: post
  const categoryMap = {};

  // Create post pages
  const posts = result.data.allMarkdownRemark.edges;
  posts.forEach((post, index) => {
    const { node } = post;
    const slug = node.frontmatter.slug || node.frontmatter.title;
    const { fileAbsolutePath } = node;
    const prev = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;

    if (!slug || fileAbsolutePath.indexOf('/_drafts') >= 0) {
      return;
    }

    createPage({
      path: `/post/${decodeURIComponent(slug)}`,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        title: node.frontmatter.title,
        slug,
        prev,
        next,
        url: `/post/${decodeURIComponent(slug)}`,
      },
    });

    // pushing the post by tags
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach((t) => {
        if (!t) {
          return;
        }
        if (tagsMap[t] === undefined) {
          tagsMap[t] = [];
        }
        tagsMap[t].push(post);
      });
    }

    if (node.frontmatter.categories) {
      node.frontmatter.categories.forEach((c) => {
        if (!c) {
          return;
        }
        if (categoryMap[c] === undefined) {
          categoryMap[c] = [];
        }
        categoryMap[c].push(post);
      });
    }
  });

  // create list pages
  const postsPerPage = 10;
  const maxPage = Math.ceil(posts.length / postsPerPage);
  for (let i = 0; i < maxPage; i += 1) {
    createPage({
      path: `/${i === 0 ? '' : `posts/${i + 1}`}`,
      component: require.resolve(`./src/templates/post-list.tsx`),
      context: {
        currentPage: i,
        maxPage,
        baseUrl: `/posts`,
        // additional data can be passed via context
        posts: posts.slice(i * postsPerPage, (i + 1) * postsPerPage),
      },
    });
  }
  createRedirect({ fromPath: '/posts/1', toPath: '/' });

  // create tags pages
  Object.keys(tagsMap).forEach((t) => {
    const tagMaxPage = Math.ceil(tagsMap[t].length / postsPerPage);
    for (let i = 0; i < tagMaxPage; i += 1) {
      createPage({
        path: `/tags/${t}/${i === 0 ? '' : `${i + 1}`}`,
        component: require.resolve(`./src/templates/post-list.tsx`),
        context: {
          currentPage: i,
          maxPage: tagMaxPage,
          baseUrl: `/tags/${t}`,
          // additional data can be passed via context
          posts: tagsMap[t].slice(i * postsPerPage, (i + 1) * postsPerPage),
        },
      });
    }
    createRedirect({ fromPath: `/tags/${t}/1`, toPath: `/tags/${t}` });
  });

  // create category pages
  Object.keys(categoryMap).forEach((c) => {
    const categoryMaxPage = Math.ceil(categoryMap[c].length / postsPerPage);
    for (let i = 0; i < categoryMaxPage; i += 1) {
      createPage({
        path: `/categories/${c}/${i === 0 ? '' : `${i + 1}`}`,
        component: require.resolve(`./src/templates/post-list.tsx`),
        context: {
          currentPage: i,
          maxPage: categoryMaxPage,
          baseUrl: `/categories/${c}`,
          // additional data can be passed via context
          posts: categoryMap[c].slice(i * postsPerPage, (i + 1) * postsPerPage),
        },
      });
    }
    createRedirect({
      fromPath: `/categories/${c}/1`,
      toPath: `/categories/${c}`,
    });
  });
};

exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage },
}) => {
  const originalPath = page.path;

  // Delete the original page (since we are gonna create localized versions of it)
  await deletePage(page);

  // create the alias for '/' using zh-hk
  await createPage({
    ...page,
    path: originalPath,
    context: {
      ...page.context,
      originalPath,
      lang: 'zh-hk',
    },
  });
};
