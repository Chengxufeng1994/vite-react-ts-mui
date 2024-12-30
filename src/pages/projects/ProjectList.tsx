import { useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { useAppContext } from '~/src/contexts/app/context';

const ProjectList = () => {
  const { appContextAction } = useAppContext();

  useEffect(() => {
    const breadcrumbs = [{ label: 'Projects', href: '/projects' }];
    appContextAction.breadcrumbs.setBreadcrumbs(breadcrumbs);

    return () => {};
  }, [appContextAction.breadcrumbs]);

  return (
    <>
      <Typography variant='h5'>Projects</Typography>
    </>
  );
};

export default ProjectList;
