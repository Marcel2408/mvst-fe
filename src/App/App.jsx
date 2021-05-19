import React from 'react';
import './App.scss';
import PageGrid from '../templates/PageGrid/PageGrid';
import Header from '../components/Header/Header';
import Searchbar from '../components/Searchbar/Searchbar';

function App() {
  return (
    <div className="app">
      <PageGrid>
        <Header />
        <Searchbar />
      </PageGrid>
    </div>
  );
}

export default App;
