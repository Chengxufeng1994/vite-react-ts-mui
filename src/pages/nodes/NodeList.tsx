import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

import { useAppContext } from '@/contexts/app/context';
import { nodeService } from '@/service';
import { Node } from '@/features/nodes/nodes.types';
import NodeCard from '~/src/features/nodes/nodeSummary';
import { Stack } from '@mui/material';

const NodeList = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [nodes, setNodes] = useState<Node[]>();
  const { appContextAction } = useAppContext();

  useEffect(() => {
    const breadcrumbs = [{ label: 'Nodes', href: '/nodes' }];

    appContextAction.breadcrumbs.setBreadcrumbs(breadcrumbs);
    return () => {
      appContextAction.breadcrumbs.setBreadcrumbs([]);
    };
  }, [appContextAction.breadcrumbs]);

  useEffect(() => {
    setLoading(true);

    const fetchNodes = async () => {
      try {
        const nodes = await nodeService.findNodes();
        setNodes(nodes);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNodes();
  }, []);

  const renderNodeList = () => {
    if (!nodes || nodes.length <= 0) {
      return null;
    }

    return nodes.map((node, i) => {
      // const { id, hostName } = node;
      return <NodeCard key={i} node={node} />;
    });
  };

  if (loading) {
    return <Typography variant='h5'>Loading...</Typography>;
  }

  return (
    <>
      <Typography variant='h5'>Nodes</Typography>
      <Stack spacing={2}>{nodes && renderNodeList()}</Stack>
    </>
  );
};

export default NodeList;
