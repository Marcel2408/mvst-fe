/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Button from '../Button/CustomButton';
import Icon from '../Icon/CustomIcon';

import './RepoItem.scss';

/**
 * Functional React component displaying the RepoItem component
 * @function RepoItem
 * @returns {JSX.Element} - Rendered RepoItem Component
 */

const RepoItem = () => (
  <li className="repo_item">
    <div className="item">
      <h3 className="item_title">
        <a href="#" className="item_link">
          mvst-fe
        </a>
      </h3>

      <div className="item_info">
        <div className="item_info_language">
          <span className="language-color" />
          <span className="language">HTML</span>
        </div>
        <div className="item_info_stargazer">
          <Icon icon="star" />
          1
        </div>

        <div className="item_info_update">
          <span className="update_text">Updated 2 days ago</span>
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

export default RepoItem;
