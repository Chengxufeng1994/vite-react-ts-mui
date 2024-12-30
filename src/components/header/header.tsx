import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Stack from '@mui/material/Stack';

import MenuIcon from '@mui/icons-material/Menu';

import type { HeaderProps } from './header.types';

const Header: React.FC<HeaderProps> = ({ title, breadcrumbs, actions, openMenu }: HeaderProps) => {
  const renderActions = () => {
    if (!actions) return null;

    return actions.map((action, i) => {
      const { label, onClick } = action;
      return (
        <Button key={i} color='inherit' startIcon={action.icon} onClick={onClick}>
          {label}
        </Button>
      );
    });
  };

  return (
    <AppBar position='static' color='inherit' elevation={1}>
      <Toolbar>
        {openMenu ? (
          <IconButton
            size='small'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={openMenu}
          >
            <MenuIcon />
          </IconButton>
        ) : null}

        <Box sx={{ flexGrow: 1 }}>
          <Stack direction='row' alignItems='center' spacing={2}>
            {title ? title : null}
            {breadcrumbs ? breadcrumbs : null}
          </Stack>
        </Box>

        {renderActions()}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
