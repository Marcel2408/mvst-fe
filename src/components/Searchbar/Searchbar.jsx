import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/CustomButton';
import Results from '../Results/Results';
import debounce from '../../helpers/debounce';
import './Searchbar.scss';

/**
 * Functional React component displaying the searchbar component
 * @function Searchbar
 * @param {function} handleOnChange - updates the searchValue state
 * and the repoList state on every user search
 * @param {number} searchValue - user search value
 * @param {number} resultsCount - length of the list matching the searchValue
 * @returns {JSX.Element} - Rendered Searchbar Component
 */
const Searchbar = ({ handleOnChange, searchValue, resultsCount }) => (

  <div className="searchbar">
    <div className="searchbar_wrapper">
      <input
        type="text"
        className="searchbar_input"
        placeholder="Find a repository..."
        onChange={debounce(handleOnChange)}
      />
      <div className="dropdown">
        <Button kind="dropdown">
          Type
        </Button>
        <Button kind="dropdown">
          Language
        </Button>
        <Button kind="dropdown">
          Sort
        </Button>
      </div>

      <div className="new-repo">
        <Button kind="new-repo">
          New
        </Button>
      </div>
    </div>

    {
      searchValue
        ? <Results resultsCount={resultsCount} searchValue={searchValue} />
        : null
}

  </div>
);

Searchbar.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  resultsCount: PropTypes.number.isRequired,
  searchValue: PropTypes.string.isRequired,
};

export default Searchbar;
