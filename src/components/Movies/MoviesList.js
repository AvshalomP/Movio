import React, { Component } from 'react';
import styles from '../styles/MovieList.module.css';
import { connect } from 'react-redux';
import { fetchMovies, deleteMovie } from "../../store/actions/movies";
//components
import MovieCard from './MovieCard';

class MoviesList extends Component {

    componentDidMount() {
        //fetch all movies
        this.props.fetchMovies();
    }

    render(){
        const { deleteMovie } = this.props;
        const movies = this.props.movies.map( (movie, idx) => (
            <MovieCard key={movie.imdbID} idx={idx} movie={movie}
                       deleteMovie={deleteMovie.bind(this, movie.imdbID)}
            />
        ));

        return (
            <div className={styles.container}>
                {movies}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

export default connect(mapStateToProps, { fetchMovies, deleteMovie })(MoviesList);