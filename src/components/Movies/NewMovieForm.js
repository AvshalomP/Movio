import React, { Component } from 'react';
import styles from '../styles/NewMovieForm.module.css';

class NewMovieForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            Title: "",
            Director: "",
            Genre: "",
            Poster: "",
            Year: "",
            Runtime: "",
            imdbID: ""
        }
    }

    handleChange = (e) => {
        this.setState({
                [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    };

    render(){
        const { imdbID, Title, Director, Genre, Year, Runtime, Poster } = this.state;

        return (
            <form id="newMovieForm" onSubmit={ this.handleSubmit }>
                <label>Title:</label>
                <input type="text" name="Title"  onChange={this.handleChange} value={Title} />
                <label>Director:</label>
                <input type="text" name="Director" onChange={this.handleChange} value={Director} />
                <label>Genre:</label>
                <input type="text" name="Genre" onChange={this.handleChange} value={Genre} />
                <label>Poster URL:</label>
                <input type="text" name="Poster" onChange={this.handleChange} value={Poster} />
                <div className={styles.flex}>
                    <div className={styles.flexColumn}>
                        <label>Year:</label>
                        <input type="number" name="Year" className={styles.inputWidth}
                               onChange={this.handleChange} value={Year} />
                    </div>
                    <div className={styles.flexColumn}>
                        <label>Runtime:</label>
                        <input type="text" name="Runtime" className={styles.inputWidth}
                               onChange={this.handleChange} value={Runtime} />
                    </div>
                    <div className={styles.flexColumn}>
                        <label>imdb ID:</label>
                        <input type="number" name="imdbID" className={styles.inputWidth}
                               onChange={this.handleChange} value={imdbID} />
                    </div>
                </div>
            </form>
        )
    }
}

export default NewMovieForm;