import React from 'react';
import styles from '../styles/MovieCard.module.css';

const MovieDetails = (props) => {
    const { year, runtime, genre, director } = props;
    return (
        <div className={styles.details}>
            <div>{runtime}</div>
            <div>{genre}</div>
            <div>{`${director}, ${year}`}</div>
        </div>
    )
};


export default MovieDetails;