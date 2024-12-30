import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router';

import MainLayout from '@/layouts/mainLayout';
import NodePageLayout from '@/layouts/nodePageLayout';
import PageLoader from '@/components/pageLoader';

const NodeListPage = lazy(() => import('@/pages/nodes/NodeList'));
const NodeAllocationPage = lazy(() => import('@/pages/nodes/node/allocation'));
const NodeSystemPage = lazy(() => import('@/pages/nodes/node/system'));
const NodeGPUsPage = lazy(() => import('@/pages/nodes/node/gpus'));
const ProjectListPage = lazy(() => import('~/src/pages/projects/ProjectList'));

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* MainLayout wraps all routes */}
        <Route path='' element={<MainLayout />}>
          <Route index element={<Navigate to='nodes' />} />

          <Route path='nodes'>
            <Route index element={<NodeListPage />} />
            <Route path=':nodeId' element={<NodePageLayout />}>
              <Route path='allocation' element={<NodeAllocationPage />} />
              <Route path='system' element={<NodeSystemPage />} />
              <Route path='gpus' element={<NodeGPUsPage />} />
              <Route index element={<Navigate to='allocation' />} />
            </Route>
          </Route>

          <Route path='projects' element={<ProjectListPage />} />
          <Route path='models' />
          <Route path='settings' />

          <Route path='*' element={<Navigate to='/nodes' replace />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
