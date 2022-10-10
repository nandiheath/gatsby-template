import React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';

interface Props {
  firstPageOverride: string;
  baseUrl: string;
  currentPage: Number;
  maxPage: number;
}

const renderLink = (url: string, pageIndex: number, isCurrent: boolean) =>
  isCurrent ? (
    <>{`[${pageIndex + 1}]`}</>
  ) : (
    <>
      [<Link to={url}>{pageIndex + 1}</Link>]
    </>
  );

const PaginationFooter = ({
  firstPageOverride,
  baseUrl,
  currentPage,
  maxPage,
}: Props) => {
  const pages = _.times(maxPage, (n) => n);

  return (
    <div className="flex flex-row">
      {pages.map((index) => (
        <div key={index}>
          {renderLink(
            index === 0 ? firstPageOverride : `${baseUrl}/${index + 1}`,
            index,
            index === currentPage,
          )}
        </div>
      ))}
    </div>
  );
};

export default PaginationFooter;
