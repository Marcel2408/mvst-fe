/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import './Header.scss';
import { ReactComponent as OverviewIcon } from '../../assets/icons/overview.svg';
import { ReactComponent as RepositoryIcon } from '../../assets/icons/repository.svg';
import { ReactComponent as ProjectIcon } from '../../assets/icons/project.svg';
import { ReactComponent as PackageIcon } from '../../assets/icons/package.svg';

/**
 * Functional React component displaying the grid template
 * @function Header
 * @returns {JSX.Element} - Rendered header component
 */

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <ul className="navbar_list">
        <li className="navbar_list_item">
          <OverviewIcon />
          <a className="navbar_list_link">Overview</a>
        </li>
        <li className="navbar_list_item selected">
          <RepositoryIcon />
          Repositories
          <span className="counter" title="35">35</span>
        </li>
        <li className="navbar_list_item">
          <ProjectIcon />
          Projects
        </li>
        <li className="navbar_list_item">
          <PackageIcon />
          Packages
        </li>
      </ul>
    </nav>

  </header>
);

export default Header;
