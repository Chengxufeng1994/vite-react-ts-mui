import React from 'react';

import AuthRouter from '@/routers/AuthRouter';
import AppRouter from '@/routers/AppRouter';

const RootApp: React.FC = () => {
  const isAuthenticated = true;

  if (!isAuthenticated) {
    return <AuthRouter />;
  }

  return <AppRouter />;
};

export default RootApp;
