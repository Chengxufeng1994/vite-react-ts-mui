import React from 'react';
import { Link } from 'react-router';

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import ClearIcon from '@mui/icons-material/Clear';
import IconButton from '@mui/material/IconButton';

import * as Utils from '@/utils';

import type { MenuProps, MenuItemLinkProps } from './menu.types';

function ListItemLink(props: MenuItemLinkProps) {
  const { icon, primary, to, ...restProps } = props;

  return (
    <ListItemButton component={Link} to={to} {...restProps}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItemButton>
  );
}

const Menu: React.FC<MenuProps> = ({ title = 'AIDMS', width = 250, menuItems, open, onClose }) => {
  const renderMenuItems = () => {
    return menuItems.map((item, i) => {
      const { type, primary, to } = item;

      const isDivider = type === 'divider';
      if (isDivider) {
        return <Divider key={i} />;
      }

      const capitalizeLabel = Utils.toCapitalize(primary);
      return (
        <ListItem key={i} disablePadding>
          <ListItemLink primary={capitalizeLabel} to={to} />
        </ListItem>
      );
    });
  };

  return (
    <Drawer open={open} onClose={onClose}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>{title ? title : null}</Box>
        <IconButton aria-label='menu-close' onClick={onClose}>
          <ClearIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <Box sx={{ width }} role='presentation' onClick={onClose}>
        <List aria-label='main'>{renderMenuItems()}</List>
      </Box>
    </Drawer>
  );
};

export default Menu;
