import React from 'react';
import { Card } from '@mui/material';
import { graphql, Link, useStaticQuery } from 'gatsby';

type CategoryEntry = {
  count: number;
  categories: {
    [key: string]: CategoryEntry;
  };
};

const constructNestedMap = (map: CategoryEntry, categories: string[]) => {
  if (categories.length === 0) {
    return;
  } else if (categories.length === 1) {
    const key = categories[0];
    let entry: CategoryEntry = map.categories[key] || {
      count: 0,
      categories: {},
    };
    entry.count += 1;
    map.categories[key] = entry;
  } else {
    const key = categories[0];
    let entry: CategoryEntry = map.categories[key] || {
      count: 0,
      categories: {},
    };
    entry.count += 1;
    constructNestedMap(entry, categories.slice(1, categories.length));
    map.categories[key] = entry;
  }
};

type Props = {
  node: CategoryEntry;
};

const CategoryTag = ({ node }: Props) => {
  return (
    <div className="ml-4">
      {Object.keys(node.categories).map((key) => (
        <div key={key}>
          <Link
            to={`/categories/${key}`}
            className="mr-2 inline-block"
            style={{ textDecoration: 'none' }}
          >
            <span>
              {key}[{node.categories[key].count}]
            </span>
          </Link>

          <CategoryTag node={node.categories[key]} />
        </div>
      ))}
    </div>
  );
};

const Categories = () => {
  const data = useStaticQuery(graphql`
    query CateroiesQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "//posts//" }
          frontmatter: { draft: { ne: true } }
        }
      ) {
        edges {
          node {
            frontmatter {
              categories
            }
          }
        }
      }
    }
  `);
  const categories: CategoryEntry = { count: 0, categories: {} };

  data.allMarkdownRemark.edges.forEach((e: any) => {
    if (e.node.frontmatter.categories !== null) {
      constructNestedMap(categories, e.node.frontmatter.categories);
    }
  });

  return (
    <div className="p-8">
      <Card color="primary" className="p-2 break-words">
        <CategoryTag node={categories} />
      </Card>
    </div>
  );
};

export default Categories;
