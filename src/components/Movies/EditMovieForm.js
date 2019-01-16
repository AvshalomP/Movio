import React, { Component } from 'react';
import styles from '../styles/EditMovieForm.module.css';
import { editMovie } from '../../store/actions/movies';
import { connect } from 'react-redux';

class EditMovieForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            updatedMovie: props.movie
        }
    }

    handleChange = (e) => {
      this.setState({
        updatedMovie: {
            ...this.state.updatedMovie,
            [e.target.name]: e.target.value
        }
    })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editMovie(this.state.updatedMovie);
    };

    render(){
        const { imdbID, Title, Director, Genre, Year, Runtime } = this.state.updatedMovie;

        return (
            <form id={imdbID} onSubmit={ this.handleSubmit }>
                <label>Title:</label>
                <input type="text" name="Title"  onChange={this.handleChange} value={Title} />
                <div className={styles.flex}>
                    <div>
                        <label>Director:</label>
                        <input type="text" name="Director" onChange={this.handleChange} value={Director} />
                    </div>
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
                </div>
                <label>Genre:</label>
                <input type="text" name="Genre" onChange={this.handleChange} value={Genre} />
            </form>
        )
    }
}

export default connect(null, {editMovie})(EditMovieForm);