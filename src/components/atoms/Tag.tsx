import React from 'react';
import { Link } from 'gatsby';

interface Props {
  tag: string;
  count?: Number;
  hideHash?: boolean;
}

const getTextSize = (count: Number): string => {
  switch (count) {
    case 0:
    case 1:
      return 'text-xs';
    case 2:
      return 'text-sm';
    case 3:
      return 'text-md';
    default:
      return 'text-lg';
  }
};

const Tags = ({ tag, count, hideHash }: Props) => (
  <Link
    to={`/tags/${tag}`}
    className="mr-2 inline-block"
    style={{ textDecoration: 'none' }}
  >
    <span className={getTextSize(count || 0)}>
      {hideHash ? '' : '#'}
      {tag}
    </span>
  </Link>
);

export default Tags
