import React from 'react';

interface MenuProps {
  title?: React.ReactNode;
  width?: number;
  menuItems: MenuItemLinkProps[];
  open: boolean;
  onClose: () => void;
}

interface MenuItemLinkProps {
  icon?: React.ReactElement<unknown>;
  type?: string;
  primary: string;
  to: string;
}

export type { MenuProps, MenuItemLinkProps };
