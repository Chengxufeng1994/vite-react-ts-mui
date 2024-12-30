import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import { NodePageLayoutContextType } from '@/layouts/nodePageLayout';

const NodeAllocation: React.FC = () => {
  const { setActivateTab } = useOutletContext<NodePageLayoutContextType>();

  useEffect(() => {
    setActivateTab('allocation');
  }, [setActivateTab]);

  return (
    <>
      <Typography variant='h5'>Node Allocation</Typography>
    </>
  );
};

export default NodeAllocation;
