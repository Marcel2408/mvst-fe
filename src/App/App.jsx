import React from 'react';
import './App.scss';
import HomePageContainer from '../HOC/HomePageContainer/HomePageContainer';

function App() {
  return (
    <div data-test="component-app" className="app">
      <HomePageContainer />
    </div>
  );
}

export default App;
