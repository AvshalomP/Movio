import React, { Component } from 'react';
import styles from './styles/MovieList.module.css';
//components
import Movie from './Movie';

class MoviesList extends Component {

    render(){
        const movies = this.props.movies.map( movie => (
            <Movie key={movie.id} title={movie.title}/>
        ));

        return (
            <div className={styles.container}>
                {movies}
            </div>
        )
    }
}

export default MoviesList;