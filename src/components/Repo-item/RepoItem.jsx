/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/CustomButton';
import Icon from '../Icon/CustomIcon';

import './RepoItem.scss';

/**
 * Functional React component displaying the RepoItem component
 * @function RepoItem
 * @returns {JSX.Element} - Rendered RepoItem Component
 */

const RepoItem = ({ repo }) => (
  <li className="repo_item">
    <div className="item">
      <h3 className="item_title">
        <a href="#" className="item_link">
          {repo.name}
        </a>
      </h3>

      {repo.description ? (
        <p className="item_description">
          {repo.description}
        </p>
      ) : null}

      <div className="item_info">
        {repo.primaryLanguage
          ? (
            <div className="item_info_language">
              <span className="language-color" style={{ backgroundColor: `${repo.primaryLanguage.color}` }} />
              <span className="language">{repo.primaryLanguage.name}</span>
            </div>
          ) : null}
        {repo.stargazerCount ? (
          <div className="item_info_stargazer">
            <Icon icon="star" />
            {repo.stargazerCount}
          </div>
        ) : null}

        <div className="item_info_update">
          <span className="update_text">
            Updated
            {' '}
            {repo.updatedAt}
          </span>
        </div>
      </div>

    </div>
    <div className="item_button">
      <Button kind="stargazer">
        Star
      </Button>
    </div>
  </li>

);

RepoItem.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    name: PropTypes.string.isRequired,
    stargazerCount: PropTypes.number.isRequired,
    updatedAt: PropTypes.string.isRequired,
    primaryLanguage: PropTypes.shape({
      color: PropTypes.string,
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default RepoItem;
