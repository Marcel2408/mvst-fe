/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Icon from '../Icon/CustomIcon';
import './Header.scss';

/**
 * Functional React component displaying the header component
 * @function Header
 * @returns {JSX.Element} - Rendered header component
 */

const Header = () => (
  <header className="header">
    <nav className="navbar">
      <ul className="navbar_list">
        <li className="navbar_list_item">
          <Icon icon="overview" />
          <a className="navbar_list_link">Overview</a>
        </li>
        <li className="navbar_list_item selected">
          <Icon icon="repository" />
          Repositories
          <span className="counter" title="35">35</span>
        </li>
        <li className="navbar_list_item">
          <Icon icon="project" />
          Projects
        </li>
        <li className="navbar_list_item">
          <Icon icon="package" />
          Packages
        </li>
      </ul>
    </nav>

  </header>
);

export default Header;
