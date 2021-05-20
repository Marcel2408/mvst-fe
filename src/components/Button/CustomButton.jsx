/* eslint-disable react/prop-types */
import React from 'react';
import Icon from '../Icon/CustomIcon';

import './CustomButton.scss';

/**
 * Functional React component displaying the button component
 * @function CustomButton
 * @param {string | JSX.Element} children - the content to display inside the button
 * @returns {JSX.Element} - Rendered Button Component
 */

const CustomButton = ({ children, kind }) => {
  switch (kind) {
    case 'dropdown':
      return (
        <button type="button" className="btn btn_dropdown">
          {children}
          <span className="dropdown-caret" />
        </button>
      );
    case 'new-repo':
      return (
        <button type="button" className="btn btn_new-repo">
          <Icon icon="repository" />
          {children}
        </button>
      );
    case 'stargazer':
      return (
        <button type="button" className="btn btn_stargazer">
          <Icon icon="star" />
          {children}
        </button>
      );
    default:
      return (
        <button type="button" className="btn btn_default">
          {children}
        </button>
      );
  }
};

export default CustomButton;
