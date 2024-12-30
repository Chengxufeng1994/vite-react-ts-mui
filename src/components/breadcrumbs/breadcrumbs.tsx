import React from 'react';
import _map from 'lodash-es/map';

import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

import { BreadcrumbsProps } from './breadcrumbs.types';

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  const renderBreadcrumbs = () => {
    return _map(breadcrumbs, (breadcrumb, i) => {
      const { label, href } = breadcrumb;
      const isLast = i === breadcrumbs.length - 1;

      if (isLast) {
        return (
          <Typography key={i} sx={{ color: 'text.primary' }}>
            {label}
          </Typography>
        );
      }

      return (
        <Link key={i} underline='hover' color='inherit' href={href}>
          {label}
        </Link>
      );
    });
  };

  return (
    <MuiBreadcrumbs aria-label='breadcrumb' separator='/' maxItems={3}>
      {renderBreadcrumbs()}
    </MuiBreadcrumbs>
  );
};

export default Breadcrumbs;
