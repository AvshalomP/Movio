import React from 'react';
import styles from '../styles/MovieCard.module.css';
//components
import MovieDetails from './MovieDetails';
import ImageFooter from './ImageFooter';


const MovieCard = (props) => {
    const { poster, title } = props;
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div>
                    <div className={styles.imageBox}>
                        <img src={poster} alt=""/>
                    </div>
                    <ImageFooter/>
                    <h3>{title}</h3>
                </div>
                <MovieDetails {...props}/>
            </div>
        </div>
    )
};


export default MovieCard;