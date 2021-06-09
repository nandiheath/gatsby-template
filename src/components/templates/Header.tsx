/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <AppBar position="static" color="transparent" elevation={1}>
      <div className="w-full lg:w-1/2">
        <Toolbar>
          <Typography variant="h5">{t('title')}</Typography>
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Header;
