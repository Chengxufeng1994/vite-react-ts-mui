import React, { useCallback, useMemo, useState } from 'react';
import { Outlet } from 'react-router';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';

import { useAppContext } from '@/contexts/app/context';
import Header from '@/components/header';
import Breadcrumbs from '@/components/breadcrumbs';
import Menu from '@/components/menu';

import { MENU_ITEMS } from '@/configs';

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
      <Menu title={title} menuItems={MENU_ITEMS} open={open} onClose={handleCloseMenu} />
      <Box sx={{ p: 2 }}>
        <Outlet />
      </Box>
    </>
  );
};

export default MainLayout;
