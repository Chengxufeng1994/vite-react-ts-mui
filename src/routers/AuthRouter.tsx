import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router';

import PageLoader from '~/src/components/pageLoader';

const LoginPage = lazy(() => import('@/pages/auth/login'));

const AuthRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </Suspense>
  );
};

export default AuthRouter;
