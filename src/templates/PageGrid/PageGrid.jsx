/* eslint-disable react/prop-types */
import React from 'react';

import './PageGrid.scss';

const PageGrid = ({ children }) => (
  <div className="grid">
    {children}
  </div>
);

export default PageGrid;
