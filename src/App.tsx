import { lazy } from 'react';
import { BrowserRouter } from 'react-router';

import { AppContextProvider } from '@/contexts/app';
import AppThemeProvider from '@/contexts/theme';
import { withErrorHandler } from '@/hocs/error-handling';
import { AppErrorBoundaryFallback } from '@/hocs/error-handling/fallbacks';

const RootApp = lazy(() => import('./RootApp'));

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
