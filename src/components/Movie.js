import React from 'react';
import styles from './styles/Movie.module.css';


const Movie = (props) => {
    const { title } = props;
    return (
        <div className={styles.container}>
            <h3><strong>{ title }</strong></h3>
        </div>
    )
};


export default Movie;