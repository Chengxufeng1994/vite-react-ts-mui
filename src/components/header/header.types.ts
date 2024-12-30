import React from 'react';

export type HeaderProps = {
  title?: React.ReactNode;
  breadcrumbs?: React.ReactNode;
  openMenu?: () => void;
  actions?: action[];
};

type action = {
  label: string;
  icon: React.ReactNode;
  onClick: (_event: React.MouseEvent<HTMLButtonElement>) => void;
};
