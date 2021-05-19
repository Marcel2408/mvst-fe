/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.scss';
import { ReactComponent as OverviewIcon } from '../assets/icons/overview.svg';
import { ReactComponent as RepositoryIcon } from '../assets/icons/repository.svg';
import { ReactComponent as ProjectIcon } from '../assets/icons/project.svg';
import { ReactComponent as PackageIcon } from '../assets/icons/package.svg';

function App() {
  return (
    <div className="app container">
      <div className="grid">
        <header className="header">
          <nav className="navbar">
            <ul className="navbar_list">
              <li className="navbar_list_item">
                <OverviewIcon />
                <a className="navbar_list_link">Overview</a>
              </li>
              <li className="navbar_list_item selected">
                <RepositoryIcon />
                Repositories
                <span className="counter" title="35">35</span>
              </li>
              <li className="navbar_list_item">
                <ProjectIcon />
                Projects
              </li>
              <li className="navbar_list_item">
                <PackageIcon />
                Packages
              </li>
            </ul>
          </nav>
        </header>
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
      </div>
    </div>
  );
}

export default App;
