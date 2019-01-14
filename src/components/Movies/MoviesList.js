import React, { Component } from 'react';
import styles from '../styles/MovieList.module.css';
//components
import MovieCard from './MovieCard';
//helper method
import { apiCall } from '../services/api';

class MoviesList extends Component {
    constructor(props){
        super(props);

        this.state = { movies: [] }
    }

    fetchMovies = () => {
        const baseUrl = 'http://www.omdbapi.com/?apikey=thewdb&i=';
        //static array of 10 movies (10 imdb IDs)
        const moviesId = ['tt0111161', 'tt0468569', 'tt0120737', 'tt0133093', 'tt0167260',
            'tt0068646', 'tt1345836', 'tt0167261', 'tt0848228', 'tt0102926'];
        //API call to retrieve full description for every movie (imdb ID)
        const moviesPromiseArr = moviesId.map( movieId => apiCall('GET', baseUrl+movieId) );

        Promise.all(moviesPromiseArr)
            .then( movies => {
                this.setState( { movies } )
            })
            .catch( err => console.log(err));
    };

    componentDidMount() {
        this.fetchMovies();
    }

    render(){
        const movies = this.state.movies.map( movie => (
            <MovieCard key={movie.imdbID}
                       title={movie.Title} year={movie.Year}
                       runtime={movie.Runtime} genre={movie.Genre}
                       director={movie.Director} poster={movie.Poster}
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