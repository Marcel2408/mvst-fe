import React from 'react';
import './App.scss';
import PageGrid from '../templates/PageGrid/PageGrid';
import Header from '../components/Header/Header';
import Searchbar from '../components/Searchbar/Searchbar';
import Profile from '../components/Profile/Profile';
import RepoList from '../components/Repo-list/RepoList';

function App() {
  return (
    <div className="app">
      <PageGrid>
        <Header />
        <Searchbar />
        <Profile />
        <RepoList />
      </PageGrid>
    </div>
  );
}

export default App;
