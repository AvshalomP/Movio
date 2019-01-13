import React, { Component } from 'react';
import styles from './styles/Home.module.css';
//components
import MoviesList from './MoviesList';

class Home extends Component {
    render(){
        return (
            <div className={styles.container}>
                <MoviesList movies={movies}/>
            </div>
        )
    }
}

const movies = [
    { id: 1, title: "Dog Day Afternoon", year: 1975, runtime: "125 min",
        genre: "Biography, Crime, Drama", director: "Sidney Lumet",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_SX300.jpg" },
    { id: 2, title: "Afternoon", year: 1987, runtime: "115 min",
        genre: "Drama", director: "AA Bloom",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_SX300.jpg" },
    { id: 3, title: "Bloom", year: 1993, runtime: "105 min",
        genre: "Crime", director: "Sidney Lumet",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_SX300.jpg" },
    { id: 4, title: "World Of Wisdom", year: 1951, runtime: "96 min",
        genre: "Biography", director: "AA Bloom",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAzMzI5OTgzMl5BMl5BanBnXkFtZTgwMTU5MTAwMDE@._V1_SX300.jpg" }
];

export default Home;

