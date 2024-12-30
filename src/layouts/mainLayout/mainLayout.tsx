import React, { useCallback, useMemo, useState } from 'react';
import { Outlet } from 'react-router';

import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';

import { useAppContext } from '@/contexts/app/context';
import Header from '~/src/components/header';
import Breadcrumbs from '~/src/components/breadcrumbs';
import Menu from '~/src/components/menu';

const MainLayout: React.FC = () => {
  const { state } = useAppContext();
  const [open, setOpen] = useState(false);

  const actions = useMemo(
    () => [
      {
        label: 'Documents',
        icon: <BookIcon />,
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
        },
      },
      {
        label: 'System Admin',
        icon: <AccountCircleIcon />,
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => {
          event.preventDefault();
        },
      },
    ],
    []
  );

  const menuItems = useMemo(
    () => [
      { primary: 'node', to: '/nodes' },
      { primary: 'project', to: '/projects' },
      { primary: 'model', to: '/models' },
      { primary: 'settings', to: '/settings' },
    ],
    []
  );

  const handleOpenMenu = useCallback(() => {
    setOpen(true);
  }, []);

  const handleCloseMenu = useCallback(() => {
    setOpen(false);
  }, []);

  const title = (
    <Link variant='h6' component='a' color='inherit' underline='none' href='/'>
      AIDMS
    </Link>
  );

  return (
    <>
      <Header
        title={title}
        openMenu={handleOpenMenu}
        breadcrumbs={<Breadcrumbs breadcrumbs={state.breadcrumbs} />}
        actions={actions}
      />
      <Menu title={title} menuItems={menuItems} open={open} onClose={handleCloseMenu} />
      <Container maxWidth='xl' sx={{ mt: 2 }}>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
