import React from 'react';
import RepoItem from '../Repo-item/RepoItem';

import './RepoList.scss';

/**
 * Functional React component displaying the RepoList component
 * @function RepoList
 * @returns {JSX.Element} - Rendered RepoList Component
 */

const RepoList = () => (
  <ul className="repo-list">
    <RepoItem />
  </ul>
);

export default RepoList;
