import React from 'react';
import styles from '../styles/MovieCard.module.css';
//components
import MovieDetails from './MovieDetails';
import ImageFooter from './ImageFooter';


const MovieCard = (props) => {
    const { movie, deleteMovie } = props;

    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div>
                    <div className={styles.imageBox}>
                        <img src={movie.Poster} alt=""/>
                    </div>
                    <ImageFooter deleteMovie={deleteMovie} movie={movie}/>
                    <h3>{movie.Title}</h3>
                </div>
                <MovieDetails movie={movie}/>
            </div>
        </div>
    )
};


export default MovieCard;