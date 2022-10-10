import React from 'react';

import { mainTheme } from 'styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

interface Props {
  element: any;
}

export const wrapRootElement = ({ element }: Props) => (
  <ThemeProvider theme={mainTheme}>
    <CssBaseline />
    {element}
  </ThemeProvider>
);
