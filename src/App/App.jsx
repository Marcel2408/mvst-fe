import React from 'react';
import './App.scss';
import PageGrid from '../templates/PageGrid/PageGrid';
import Header from '../components/Header/Header';
import Icon from '../components/Icon/CustomIcon';

function App() {
  return (
    <div className="app">
      <PageGrid>
        <Header />
        <div className="searchbar">
          <input type="search" className="searchbar_input" placeholder="Find a repository..." />
          <div className="dropdown">
            <button type="button" className="btn dropdown_btn">
              Type
              <span className="dropdown-caret" />
            </button>
            <button type="button" className="btn dropdown_btn">
              Language
              <span className="dropdown-caret" />
            </button>
            <button type="button" className="btn dropdown_btn">
              Sort
              <span className="dropdown-caret" />
            </button>
          </div>
          <div className="new-repo">
            <button type="button" className="btn new-repo_btn">
              <Icon icon="repository" />
              New
            </button>
          </div>
        </div>
      </PageGrid>
    </div>
  );
}

export default App;
