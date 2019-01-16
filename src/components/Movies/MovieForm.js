import React, { Component } from 'react';
import styles from '../styles/MovieForm.module.css';
import { connect } from 'react-redux';
import { addMovie, editMovie } from "../../store/actions/movies";

class MovieForm extends Component {
    constructor(props){
        super(props);

        const { Title, Director, Genre, Poster, Year, Runtime, imdbID } = props.movie;

        this.state = {
            Title,
            Director,
            Genre,
            Poster,
            Year,
            Runtime,
            imdbID
        }
    }

    handleChange = (e) => {
        this.setState({
                [e.target.name]: e.target.value
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const { imdbID } = this.props.movie;
        imdbID ? this.props.editMovie({...this.state}) : this.props.addMovie({...this.state});
    };

    render(){
        const { Title, Director, Genre, Year, Runtime, Poster, imdbID } = this.state;


        return (
            <form id={this.props.movie.imdbID ? imdbID : "newMovieForm"} onSubmit={ this.handleSubmit }>
                <label>Title:</label>
                <input type="text" name="Title"  onChange={this.handleChange} value={Title} />
                <label>Director:</label>
                <input type="text" name="Director" onChange={this.handleChange} value={Director} />
                <label>Genre:</label>
                <input type="text" name="Genre" onChange={this.handleChange} value={Genre} />
                <label>Poster URL:</label>
                <input type="text" name="Poster" disabled={this.props.movie.Poster ? "disabled" : ""}
                       onChange={this.handleChange} value={Poster} />
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
                        <input type="text" name="imdbID" className={styles.inputWidth}
                               disabled={this.props.movie.imdbID ? "disabled" : ""}
                               onChange={this.handleChange} value={imdbID} />
                    </div>
                </div>
            </form>
        )
    }
}

export default connect(null, {addMovie, editMovie})(MovieForm);