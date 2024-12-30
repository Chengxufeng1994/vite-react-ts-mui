import { ThemeOptions, PaletteMode } from '@mui/material';
import { grey } from '@mui/material/colors';

const theme: ThemeOptions = {
  palette: {
    mode: 'light' as PaletteMode,
    primary: {
      main: grey[500],
    },
    secondary: {
      main: grey[100],
    },
  },
  typography: {
    fontFamily: ['Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(','),
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 70,
        },
      },
    },
  },
};

export default theme;
