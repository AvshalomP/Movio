import React, { Component } from 'react';
import styles from './styles/Home.module.css';
//components
import MoviesList from './Movies/MoviesList';

class Home extends Component {
    render(){
        return (
            <div>
                <h2 className={styles.title}>Top Movies</h2>
                <MoviesList />
            </div>
        )
    }
}

export default Home;

