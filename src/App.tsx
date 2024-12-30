import React from 'react';
import { BrowserRouter } from 'react-router';

import { AppContextProvider } from '@/contexts/app';
import AppThemeProvider from '@/contexts/theme';
import AuthRouter from '@/routers/authRouter';
import AppRouter from '@/routers/appRouter';
import { withErrorHandler } from '@/hocs/error-handling';
import { AppErrorBoundaryFallback } from '@/hocs/error-handling/fallbacks';

const RootApp: React.FC = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <AuthRouter />;
  }

  return <AppRouter />;
};

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <AppThemeProvider>
          <RootApp />
        </AppThemeProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

const AppWithErrorHandler = withErrorHandler(App, AppErrorBoundaryFallback);

export default AppWithErrorHandler;
