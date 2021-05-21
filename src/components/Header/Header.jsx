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
  <header className="header" data-test="component-header">
    <nav className="navbar" data-test="component-navbar">
      <ul className="navbar_list" data-test="component-list">
        <li className="navbar_list_item" data-test="component-item">
          <Icon icon="overview" data-test="component-icon" />
          <a href="#" className="navbar_list_link" data-test="component-link">Overview</a>
        </li>
        <li className="navbar_list_item selected" data-test="component-item">
          <Icon icon="repository" data-test="component-icon" />
          <a href="#" className="navbar_list_link" data-test="component-link">Repositories</a>
          <span className="counter" title={repoCount} data-test="component-counter">{repoCount}</span>
        </li>
        <li className="navbar_list_item" data-test="component-item">
          <Icon icon="project" data-test="component-icon" />
          <a href="#" className="navbar_list_link" data-test="component-link">Projects</a>
        </li>
        <li className="navbar_list_item" data-test="component-item">
          <Icon icon="package" data-test="component-icon" />
          <a href="#" className="navbar_list_link" data-test="component-link">Packages</a>
        </li>
      </ul>
    </nav>

  </header>
);

Header.propTypes = {
  repoCount: PropTypes.number.isRequired,
};

export default Header;
