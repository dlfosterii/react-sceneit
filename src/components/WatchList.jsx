import React, { Component } from 'react';
import MovieCard from './MovieCard';
import './MovieList.css'


export default class WatchList extends Component {
    render() {
        return (
            <div className="movie-list">
                {this.props.watchList.map((movie) => {
                    return <MovieCard key={movie.id} movie={movie} addToWatchList={this.props.addToWatchList}/>
                })}
            </div>
        )
    }
}
