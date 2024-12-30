import React from 'react';
import { useNavigate } from 'react-router';

import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import { Gauge } from '@mui/x-charts/Gauge';

import type { NodeSummaryProps } from './nodeSummary.types';

const NodeSummary: React.FC<NodeSummaryProps> = ({ node }) => {
  const navigate = useNavigate();
  const { id, hostName, hostIP, CPU, UsedCPU, Memory, UsedMemory } = node;

  return (
    <Card>
      <CardActionArea
        onClick={() => navigate(`/nodes/${id}`)}
        sx={{
          height: '100%',
          '&[data-active]': {
            backgroundColor: 'action.selected',
            '&:hover': {
              backgroundColor: 'action.selectedHover',
            },
          },
        }}
      >
        <CardContent sx={{ height: '100%' }}>
          <Grid container spacing={2}>
            <Grid
              size={3}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <Typography variant='h6' component='div'>
                {hostName}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {hostIP}
              </Typography>
            </Grid>
            <Grid size={3}>
              <Typography variant='h6' component='div'>
                CPU allocation
              </Typography>
              <Gauge
                cornerRadius='50%'
                width={200}
                height={200}
                value={UsedCPU}
                valueMax={CPU}
                text={({ value, valueMax }) => `${value} / ${valueMax} Threads`}
              />
            </Grid>
            <Grid size={3}>
              <Typography variant='h6' component='div'>
                RAM allocation
              </Typography>
              <Gauge
                cornerRadius='50%'
                width={200}
                height={200}
                value={UsedMemory}
                valueMax={Memory}
                text={({ value, valueMax }) => `${value} / ${valueMax} GB`}
              />
            </Grid>
            <Grid size={3}>
              <Typography variant='h6' component='div'>
                GPU
              </Typography>
              {node.GPUs.map(gpu => (
                <Typography key={gpu.id}>{gpu.ProductName}</Typography>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default NodeSummary;
