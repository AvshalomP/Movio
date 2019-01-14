import React from 'react';
import styles from '../styles/MovieCard.module.css';
//components
import MovieDetails from './MovieDetails';
import ImageFooter from './ImageFooter';


const MovieCard = (props) => {
    const { poster } = props;
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.imageBox}>
                    <img src={poster} alt=""/>
                </div>
                <ImageFooter/>
                <MovieDetails {...props}/>
            </div>
        </div>
    )
};


export default MovieCard;