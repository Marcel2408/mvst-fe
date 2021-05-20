import React from 'react';
import Button from '../Button/CustomButton';

import './Searchbar.scss';

/**
 * Functional React component displaying the searchbar component
 * @function Searchbar
 * @returns {JSX.Element} - Rendered Searchbar Component
 */

const Searchbar = () => (
  <div className="searchbar">
    <input type="search" className="searchbar_input" placeholder="Find a repository..." />
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
);

export default Searchbar;
