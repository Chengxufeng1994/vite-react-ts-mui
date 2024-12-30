import React, { useMemo } from 'react';
import { createTheme, CssBaseline, responsiveFontSizes } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@/theme';
import { useAppContext } from '@/contexts/app/context';
import type { AppThemeProviderProps } from './theme.types';

const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
  disableCssBaseline = false,
}) => {
  const {
    state: { darkMode },
  } = useAppContext();

  const newTheme = useMemo(() => {
    return responsiveFontSizes(
      createTheme({
        ...theme,
        palette: {
          ...theme.palette,
          mode: darkMode ? 'dark' : 'light',
        },
      })
    );
  }, [darkMode]);

  return (
    <ThemeProvider theme={newTheme}>
      {!disableCssBaseline && <CssBaseline />}
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
