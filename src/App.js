import React from 'react';
import './App.css';
import PagesComp from './container/pages/pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <PagesComp />
      </div>
    </BrowserRouter>
  );
}

export default App;
