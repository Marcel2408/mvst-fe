/* eslint-disable react/prop-types */
import React from 'react';
import Icon from '../Icon/CustomIcon';

import './CustomButton.scss';

const CustomButton = ({ children, kind }) => {
  switch (kind) {
    case 'dropdown':
      return (
        <button type="button" className="btn dropdown_btn">
          {children}
          <span className="dropdown-caret" />
        </button>
      );
    case 'new-repo':
      return (
        <button type="button" className="btn new-repo_btn">
          <Icon icon="repository" />
          {children}
        </button>
      );
    default:
      return null;
  }
};

export default CustomButton;
