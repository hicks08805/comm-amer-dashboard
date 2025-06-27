import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9c27b0',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    fontFamily: ['"Roboto"', 'sans-serif'].join(','),
    fontWeightBold: 700,
  },
});

export default theme;