import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MovieList from './components/MovieList';
import WatchList from './components/WatchList';
import Search from './components/Search';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  state = {
    movies: [],
    watchList: [],
    inputValue: '',
  }

  addToWatchList = (movie) => {
    this.setState({
      watchList: [...this.state.watchList, movie]
    })

  }


  handleFormSubmit = (e) => {
    e.preventDefault();
    let urlEncodedSearchString = encodeURIComponent(this.state.inputValue);

    fetch(`http://www.omdbapi.com/?apikey=ae5e0f83&s=${urlEncodedSearchString}`)
      .then(res => res.json())
      .then(data => this.setState({
        movies: data ? data.Search : []
      }))

  }

  handleChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }



  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <h1 >Scene It</h1>
            <div className="head-subtitle">
              Your tool to find great movies!
          </div>
          </header>
          <Switch>
            <Route exact path='/' >
              <Link to="/watchlist">Go to Watch List</Link>
              <Search handleFormSubmit={this.handleFormSubmit} handleChange={this.handleChange} />
              <MovieList movies={this.state.movies} addToWatchList={this.addToWatchList} />

            </Route>
            <Route path='/watchlist' >
              <Link to="/">Home</Link>
              <h1>My Watch List</h1>
              <WatchList watchList={this.state.watchList} addToWatchList={this.addToWatchList} />
            </Route>
            <Route>
              <h1>Error! 404 - Not Found</h1>
            </Route>
          </Switch>

        </div>

      </BrowserRouter>
    );
  }
}

export default App;
