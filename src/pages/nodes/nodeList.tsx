import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import Typography from '@mui/material/Typography';

import { useAppContext } from '@/contexts/app/context';
import { users as usersApi } from '@/api';

const NodeList = () => {
  const navigate = useNavigate();
  const { appContextAction } = useAppContext();

  useEffect(() => {
    const breadcrumbs = [{ label: 'Nodes', href: '/nodes' }];

    appContextAction.breadcrumbs.setBreadcrumbs(breadcrumbs);
  }, [appContextAction.breadcrumbs]);

  useEffect(() => {
    // method 1:
    // const fetch = async () => {
    //   await usersApi.getList();
    // };
    // fetch();

    // method 2:
    usersApi.getList().then(data => {
      console.log(data);
    });
  }, []);

  const renderNodeList = () => {
    const nodeIds = ['master', 'worker-1', 'worker-2'];

    return nodeIds.map(nodeId => (
      <Typography
        key={nodeId}
        variant='body1'
        onClick={() => {
          navigate(`/nodes/${nodeId}`);
        }}
      >
        {nodeId}
      </Typography>
    ));
  };

  return (
    <>
      <Typography variant='h5'>Nodes</Typography>
      {renderNodeList()}
    </>
  );
};

export default NodeList;
