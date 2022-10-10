import React from 'react';
import { Card } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash';
import Tag from 'components/atoms/Tag';

const TagCloud = () => {
  const data = useStaticQuery(graphql`
    query TagQuery {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { regex: "//posts//" }
          frontmatter: { draft: { ne: true } }
        }
      ) {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `);
  const tags: string[] = _.flatten(
    data.allMarkdownRemark.edges.map((e: any) => e.node.frontmatter.tags || []),
  );
  const tagMap: { [key: string]: number } = {};
  tags
    .filter((t) => t !== null)
    .forEach((t: string) => {
      tagMap[t] = (tagMap[t] || 0) + 1;
    });

  return (
    <div className="p-8">
      <Card color="primary" className="p-2 break-words">
        {Object.keys(tagMap).map((t) => (
          <Tag hideHash key={t} count={tagMap[t]} tag={t} />
        ))}
      </Card>
    </div>
  );
};

export default TagCloud;
