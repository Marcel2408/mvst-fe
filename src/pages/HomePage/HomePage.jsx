/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Profile from '../../components/Profile/Profile';
import RepoList from '../../components/Repo-list/RepoList';
import Searchbar from '../../components/Searchbar/Searchbar';
import PageGrid from '../../templates/PageGrid/PageGrid';

import './HomePage.scss';

/**
 * Functional React component displaying the HomePage component
 * @function HomePage
 * @param {object} userData - data from API to display the user info
 * @returns {JSX.Element} - Rendered HomePage Component
 */

const HomePage = ({ userData }) => {
  const [repoList, setRepoList] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const searchRepos = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    setRepoList(() => userData.repoList.filter((list) => list.name
      .toLowerCase()
      .includes(value.toLowerCase())));
  };

  useEffect(() => {
    setRepoList(userData.repoList);
  }, []);
  return (
    <div data-test="component-homepage">
      <PageGrid data-test="component-grid">
        <Header repoCount={userData.repoCount} />
        <Searchbar
          handleOnChange={searchRepos}
          searchValue={searchValue}
          resultsCount={repoList.length}
        />
        <Profile profileData={userData.profileData} />
        <RepoList list={repoList} />
      </PageGrid>
    </div>
  );
};

export default HomePage;
