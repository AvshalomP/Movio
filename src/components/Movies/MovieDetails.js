import React from 'react';
import styles from '../styles/MovieCard.module.css';

const MovieDetails = (props) => {
    const { title, year, runtime, genre, director } = props;
    return (
        <div className={styles.details}>
            <h3>{title}</h3>
            <div>{runtime}</div>
            <div>{genre}</div>
            <div>{`${director}, ${year}`}</div>
        </div>
    )
};


export default MovieDetails;