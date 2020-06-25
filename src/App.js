import React, { Component } from 'react';
import MovieList from './components/MovieList';
import Search from './components/Search';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {
  state = {
    movies: [],
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



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 >Scene It</h1>
          <div className="head-subtitle">
            Your tool to find great movies!
          </div>
        </header>
        <Search handleFormSubmit={this.handleFormSubmit} />
        <Container>
          <Row md={4}> 
            <MovieList movies={this.state.movies} />

          </Row>

        </Container>
      </div>
    );
  }
}

export default App;
