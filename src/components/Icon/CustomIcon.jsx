/* eslint-disable react/prop-types */
import React from 'react';

import './CustomIcon.scss';

import { ReactComponent as OverviewIcon } from '../../assets/icons/overview.svg';
import { ReactComponent as RepositoryIcon } from '../../assets/icons/repository.svg';
import { ReactComponent as ProjectIcon } from '../../assets/icons/project.svg';
import { ReactComponent as PackageIcon } from '../../assets/icons/package.svg';

/**
 * Functional React component displaying the icon component
 * @function CustomIcon
 * @param {icon} icon - the kind of icon to return
 * @returns {JSX.Element} - Rendered Icon Component
 */

const CustomIcon = ({ icon }) => {
  switch (icon) {
    case 'overview':
      return <OverviewIcon />;
    case 'repository':
      return <RepositoryIcon />;
    case 'project':
      return <ProjectIcon />;
    case 'package':
      return <PackageIcon />;
    default:
      return null;
  }
};

export default CustomIcon;
