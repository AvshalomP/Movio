import React, { Component } from 'react';
import styles from './styles/MovieList.module.css';
//components
import MovieCard from './MovieCard';

class MoviesList extends Component {

    render(){
        const movies = this.props.movies.map( movie => (
            <MovieCard key={movie.id}
                       title={movie.title} year={movie.year}
                       runtime={movie.runtime} genre={movie.genre}
                       director={movie.director} poster={movie.poster}
            />
        ));

        return (
            <div className={styles.container}>
                {movies}
            </div>
        )
    }
}

export default MoviesList;