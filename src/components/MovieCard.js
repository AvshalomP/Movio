import React from 'react';
import styles from './styles/MovieCard.module.css';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { IconContext } from 'react-icons';
//components
import MovieDetails from './MovieDetails';


const MovieCard = (props) => {
    const { poster } = props;
    return (
        <div className={styles.cardContainer}>
            <div className={styles.card}>
                <div className={styles.imageBox}>
                    <img src={poster} alt=""/>
                </div>
                <div className={styles.imgFooter}>
                    <IconContext.Provider value={{color: '#65B4F3', size: '1.2em'}}>
                        <div className={styles.hoverOpacity}><FaEdit /></div>
                    </IconContext.Provider>
                    <IconContext.Provider value={{color: 'red', size: '1.2em'}}>
                        <div className={styles.hoverOpacity}><FaTrashAlt /></div>
                    </IconContext.Provider>
                </div>
                <MovieDetails {...props}/>
            </div>
        </div>
    )
};


export default MovieCard;