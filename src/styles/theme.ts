import { createTheme } from '@mui/material';
import createPalette, {
  PaletteOptions,
} from '@mui/material/styles/createPalette';


export const headingFontFamily = 'Noto Sans Mono';
export const bodyFontFamily = 'Noto Sans Mono';

const palette: PaletteOptions = {
  primary: {
    main: '#009688',
    contrastText: '#222',
  },
  secondary: {
    main: '#673ab7',
    contrastText: '#222',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  background: {
    default: '#fff',
    paper: '#f0f0f0'
  }
};

export const typography = {
  useNextVariants: true,
  xsmallFontSize: 12,
  smallFontSize: 14,
  fontSize: 16,
  fontFamily: headingFontFamily,
  h1: {
    fontFamily: headingFontFamily,
    fontSize: 34,
    fontWeight: 500,
  },
  h2: {
    fontFamily: headingFontFamily,
    fontSize: 30,
    fontWeight: 500,
  },
  h3: {
    fontFamily: headingFontFamily,
    fontSize: 26,
    fontWeight: 500,
  },
  h4: {
    fontFamily: headingFontFamily,
    fontSize: 24,
    fontWeight: 500,
  },
  h5: {
    fontFamily: headingFontFamily,
    fontSize: 20,
    fontWeight: 500,
  },
  h6: {
    fontFamily: headingFontFamily,
    fontSize: 18,
    fontWeight: 500,
  },
  subtitle1: {
    fontFamily: headingFontFamily,
    fontSize: 16,
    fontWeight: 500,
  },
  subtitle2: {
    fontFamily: headingFontFamily,
    fontSize: 14,
  },
  body1: {
    fontFamily: headingFontFamily,
    fontSize: 16,
    letterSpacing: 0.5,
  },
  body2: {
    fontFamily: headingFontFamily,
    fontSize: 14,
    letterSpacing: 0.25,
  },
  caption: {
    fontFamily: headingFontFamily,
    fontSize: 12,
    letterSpacing: 0.4,
  },
  overline: {
    fontFamily: headingFontFamily,
    fontSize: 10,
    letterSpacing: '1.4px',
    lineHeight: '16px',
  },
  button: {
    fontFamily: headingFontFamily,
    fontSize: 14,
    letterSpacing: '1.25px',
    lineHeight: '16px',
  },
};

export const mainTheme = createTheme({
  typography,
  palette: createPalette(palette),
});
