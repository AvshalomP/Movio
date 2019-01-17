import React, { Component } from 'react';
import styles from './styles/Home.module.css';
//components
import MoviesList from './movies/MoviesList';

class Home extends Component {
    render(){
        return (
            <div>
                <div className={styles.title}>Top Movies</div>
                <MoviesList />
            </div>
        )
    }
}

export default Home;

