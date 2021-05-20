/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon/CustomIcon';
import './Header.scss';

/**
 * Functional React component displaying the header component
 * @function Header
 * @param {number} repoCount - total number of repositories
 * @returns {JSX.Element} - Rendered header component
 */

const Header = ({ repoCount }) => (
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
          <span className="counter" title={repoCount}>{repoCount}</span>
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

Header.propTypes = {
  repoCount: PropTypes.number.isRequired,
};

export default Header;
