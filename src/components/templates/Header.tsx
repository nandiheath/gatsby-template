/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import { AppBar, Link, Toolbar, Typography } from '@mui/material';
import { css } from '@emotion/react';

interface Props {
  siteTitle: string;
}

const Header = ({ siteTitle }: Props) => (
  <AppBar
    position="static"
    color="transparent"
    elevation={0}
    className="h-72 items-center"
  >
    <div
      className="absolute w-full h-72"
      css={css`
        background-image: url('/images/header-bg.png');
        background-size: auto 100%;
        background-position-x: center;
        background-repeat: no-repeat;
        position: absolute;
      `}
    />
    <div className="w-full lg:w-1/2">
      <Toolbar>
        <Link href="/" underline="none" color="inherit">
          <Typography variant="h5" className="text-black">
            {siteTitle}
          </Typography>
        </Link>
      </Toolbar>
    </div>
  </AppBar>
);

export default Header;
