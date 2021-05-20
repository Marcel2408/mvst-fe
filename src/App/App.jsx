/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import PageGrid from '../templates/PageGrid/PageGrid';
import Header from '../components/Header/Header';
import Searchbar from '../components/Searchbar/Searchbar';
import Profile from '../components/Profile/Profile';
import CustomIcon from '../components/Icon/CustomIcon';
import CustomButton from '../components/Button/CustomButton';

function App() {
  return (
    <div className="app">
      <PageGrid>
        <Header />
        <Searchbar />
        <Profile />
        <ul className="repo-list">
          <li className="repo-list_item">
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
                  <CustomIcon icon="star" />
                  1
                </div>

                <div className="item_info_update">
                  <span className="update_text">Updated 2 days ago</span>
                </div>
              </div>

            </div>
            <div className="item_button">
              <CustomButton kind="stargazer">
                Star
              </CustomButton>
            </div>
          </li>

        </ul>
      </PageGrid>
    </div>
  );
}

export default App;
