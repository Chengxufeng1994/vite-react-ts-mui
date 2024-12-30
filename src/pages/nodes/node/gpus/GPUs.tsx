import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { NodePageLayoutContextType } from '@/layouts/nodePageLayout';

const NodeGPUs: React.FC = () => {
  const { setActivateTab } = useOutletContext<NodePageLayoutContextType>();

  useEffect(() => {
    setActivateTab('gpus');
  }, [setActivateTab]);

  return (
    <>
      <Typography variant='h5'>Node GPUs</Typography>
    </>
  );
};

export default NodeGPUs;
