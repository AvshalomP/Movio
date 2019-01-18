import React from 'react';
import styles from '../styles/MovieCard.module.css';

const MovieDetails = (props) => {
    const { Year, Runtime, Genre, Director } = props.movie;

    return (
        <div className={styles.details}>
            <div>{`${Runtime} min`}</div>
            <div>{Genre}</div>
            <div>{`${Director}, ${Year}`}</div>
        </div>
    )
};


export default MovieDetails;