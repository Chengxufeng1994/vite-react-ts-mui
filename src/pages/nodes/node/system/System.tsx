import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { NodePageLayoutContextType } from '@/layouts/nodePageLayout';

const NodeSystem: React.FC = () => {
  const { setActivateTab } = useOutletContext<NodePageLayoutContextType>();

  useEffect(() => {
    setActivateTab('system');
  }, [setActivateTab]);

  return (
    <>
      <Typography variant='h5'>Node System</Typography>
    </>
  );
};

export default NodeSystem;
