import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from '../Repo-item/RepoItem';

import './RepoList.scss';

/**
 * Functional React component displaying the RepoList component
 * @function RepoList
 * @param {Array<object>} list - data to display the repo list
 * @returns {JSX.Element} - Rendered RepoList Component
 */

const RepoList = ({ list }) => (
  <ul className="repo-list">
    {list.map((repo) => (
      <RepoItem key={repo.id} repo={repo} />
    ))}
  </ul>
);

RepoList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    name: PropTypes.string.isRequired,
    stargazerCount: PropTypes.number.isRequired,
    updatedAt: PropTypes.string.isRequired,
    primaryLanguage: PropTypes.shape({
      color: PropTypes.string,
      name: PropTypes.string,
    }),
  })).isRequired,
};

export default RepoList;
