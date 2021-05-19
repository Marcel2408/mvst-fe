import React from 'react';
import './App.scss';
import PageGrid from '../templates/PageGrid/PageGrid';
import Header from '../components/Header/Header';

function App() {
  return (
    <div className="app">
      <PageGrid>
        <Header />
        <div className="searchbar">
          <input type="search" className="searchbar_input" placeholder="Find a repository..." />
          <div className="dropdown-btn">
            <button type="button" className="searchbar_btn">Type</button>
            <button type="button" className="searchbar_btn">Language</button>
            <button type="button" className="searchbar_btn">Sort</button>
          </div>
          <div className="new-repo">
            <button type="button" className="new-repo_btn">New</button>
          </div>
        </div>
      </PageGrid>
    </div>
  );
}

export default App;
