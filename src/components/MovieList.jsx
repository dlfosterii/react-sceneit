import React, { Component } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'


export default class MovieList extends Component {
    render() {
        return (
            <div className="movie-list">
                {this.props.movies && this.props.movies.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} addToWatchList={this.props.addToWatchList}/>
                })}
            </div>
        )
    }
}
