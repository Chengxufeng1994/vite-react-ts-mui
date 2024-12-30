import React from 'react';
import { Link, useParams } from 'react-router';

import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import { NodeNavTabsProps } from './nodeNavTabs.types';

function a11yProps(label: string) {
  return {
    id: `nodes-tab-${label}`,
    'aria-controls': `nodes-tabpanel-${label}`,
  };
}

const NodeNavTabs: React.FC<NodeNavTabsProps> = ({ activateTab }: NodeNavTabsProps) => {
  const { nodeId } = useParams();

  const tabs = [
    { label: 'Allocation', value: 'allocation', to: `/nodes/${nodeId}/allocation` },
    { label: 'System', value: 'system', to: `/nodes/${nodeId}/system` },
    { label: 'Gpus', value: 'gpus', to: `/nodes/${nodeId}/gpus` },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activateTab} aria-label='basic tabs example'>
          {tabs.map(tab => (
            <Tab
              key={tab.value}
              label={tab.label}
              value={tab.value}
              to={tab.to}
              component={Link}
              {...a11yProps(tab.value)}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
};

export default NodeNavTabs;
