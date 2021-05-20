/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Icon from '../Icon/CustomIcon';

import './Results.scss';

/**
 * Functional React component displaying the Results component
 * @function Results
 * @returns {JSX.Element} - Rendered Results Component
 */
const Results = () => (
  <div className="results show-results">
    <p className="results_text">
      <span className="strong">2</span>
      {' '}
      results for repositories matching
      {' '}
      <span className="strong">mv</span>
      {' '}
      sorted by
      {' '}
      <span className="strong">
        {' '}
        last updated

      </span>
    </p>
    <div className="results_clear">
      <a href="#" className="results_link">
        <Icon icon="clear" />
        Clear filter
      </a>
    </div>
  </div>
);

export default Results;
