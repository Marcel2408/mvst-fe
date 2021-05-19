/* eslint-disable react/prop-types */
import React from 'react';

import './PageGrid.scss';

/**
 * Functional React component displaying the grid template
 * @function PageGrid
 * @param {Array<JSX.Element>} children - Array of JSX.Elements
 * @returns {JSX.Element} - Rendered template component
 */

const PageGrid = ({ children }) => (
  <div className="grid">
    {children}
  </div>
);

export default PageGrid;
