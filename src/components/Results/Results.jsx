/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon/CustomIcon';

import './Results.scss';

/**
 * Functional React component displaying the Results component
 * @function Results
 * @param {number} resultsCount - length of the list matching the searchValue
 * @param {string} searchValue - user search value

 * @returns {JSX.Element} - Rendered Results Component
 */
const Results = ({ resultsCount, searchValue }) => (
  <div className="results">
    <p className="results_text">
      <span className="strong">{resultsCount}</span>
      {' '}
      {resultsCount === 1 ? 'result' : 'results'}
      {' '}
      for repositories matching
      {' '}
      <span className="strong">{searchValue}</span>
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

Results.propTypes = {
  resultsCount: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Results;
