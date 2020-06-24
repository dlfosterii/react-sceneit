import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 >Scene It</h1>
        <div className="head-subtitle">
          Your tool to find great movies!
        </div>
      </header>
      <form className="form">
        {/* <label htmlFor="search">Search</label> */}
        <input type="text" id="search" name="search" placeholder="Search for a movie..."></input>
        <button type="submit">Search</button>
      </form>

    </div>
  );
}

export default App;
