import React from 'react';
import { PostExcerpt } from 'types/post';
import { Card, Divider, Typography } from '@mui/material';
import moment from 'moment';
import { Link } from 'gatsby';
import Tag from 'components/atoms/Tag';

type Props = {
  post: PostExcerpt;
};

const PostExcerptCard = ({ post }: Props) => {
  const {
    frontmatter: { title, slug, tags, categories, date },
    excerpt,
  } = post;
  return (
    <>
      <Typography variant="subtitle2" className="mb-4 text-gray-500 uppercase">
        {`${date && moment(date).format('YYYY-MM-DD')} / ${
          categories && categories.join(' / ')
        }`}
      </Typography>

      <Card className="p-4 mb-8">
        <div className="mb-4" />
        <Link to={`/post/${slug || title}`} className="no-underline">
          <Typography variant="h1" color="primary">
            {title}
          </Typography>
        </Link>

        <div className="mb-4" />
        <Divider />
        <div className="mb-8" />
        <div dangerouslySetInnerHTML={{ __html: excerpt }} />
        <div className="flex flex-row mt-8">
          {tags &&
            tags.map((t) => (
              <div key={t} className="mr-4">
                <Tag tag={t} />
              </div>
            ))}
        </div>
      </Card>
    </>
  );
};

export default PostExcerptCard;
