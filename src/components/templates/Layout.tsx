/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Header from 'components/templates/Header';
import TagCloud from 'components/molecules/TagCloud';
import Categories from 'components/molecules/Categories';

const Layout = ({ children }: React.PropsWithChildren<{}>) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `);

  return (
    <div className='items-center flex flex-col h-full'>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className='flex flex-row w-full'>
        <div className='hidden lg:block lg:w-1/4 flex flex-col' />
        <div className='p-8 w-full lg:w-1/2 flex flex-col'>
          <main className='h-full'>{children}</main>
        </div>
        <div className='hidden lg:block lg:w-1/4 flex flex-col'>
          <Categories />
          <TagCloud />
        </div>
      </div>
    </div>
  );
};


export default Layout;
