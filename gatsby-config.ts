import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Nandi's Recipe`,
    siteUrl: `https://food.nandi.sh`,
    author: `Nandi Wong`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'asdf',
      },
    },
    'gatsby-theme-material-ui',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          styles: 'src/styles',
          templates: 'src/templates',
          pages: 'src/pages',
          types: 'src/types',
          components: 'src/components',
          lib: 'src/lib',
        },
        extensions: [],
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `cai-keng-ri-ji`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        excerpt_separator: `<!-- more -->`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/contents`,
        name: 'pages',
        ignore: [`**/post-template.md`],
      },
      __key: 'pages',
    },
  ],
};

export default config;
