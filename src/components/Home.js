import React, { Component } from 'react';
import styles from './styles/Home.module.css';
//components
import MoviesList from './Movies/MoviesList';

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

