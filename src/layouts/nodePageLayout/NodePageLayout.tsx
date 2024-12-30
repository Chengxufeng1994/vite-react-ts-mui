import React, { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';

import Box from '@mui/material/Box';

import NodeNavTabs from '@/features/nodes/nodeNavTabs';
import { useAppContext } from '@/contexts/app/context';
import NodeContextProvider from '@/contexts/node/provider';

export interface NodePageLayoutContextType {
  setActivateTab: React.Dispatch<React.SetStateAction<string>>;
}

const NodePageLayout: React.FC = () => {
  const { appContextAction } = useAppContext();
  const { nodeId = '' } = useParams();
  const [activateTab, setActivateTab] = useState('allocation');

  useEffect(() => {
    const breadcrumbs = [
      { label: 'Nodes', href: '/nodes' },
      { label: nodeId, href: `/nodes/${nodeId}` },
    ];

    appContextAction.breadcrumbs.setBreadcrumbs(breadcrumbs);
  }, [appContextAction.breadcrumbs, nodeId]);

  return (
    <NodeContextProvider>
      <NodeNavTabs activateTab={activateTab} />
      <Box sx={{ mt: 2 }}>
        <Outlet context={{ setActivateTab }} />
      </Box>
    </NodeContextProvider>
  );
};

export default NodePageLayout;
