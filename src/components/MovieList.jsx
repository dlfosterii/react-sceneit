import React, { Component } from 'react';
import MovieCard from './MovieCard';
import Col from 'react-bootstrap/Col'

export default class MovieList extends Component {
    render() {
        return (
            <div>
                {this.props.movies.map((movie) => {
                  return <MovieCard key={movie.id} movie={movie} className={'card m-3'}/>
                })}
            </div>
        )
    }
}
