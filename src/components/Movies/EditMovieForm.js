import React, { Component } from 'react';
import styles from '../styles/ImageFooter.module.css';

class EditMovieForm extends Component {
    constructor(props){
        super(props);

        const { imdbID, Title, Director, Genre, Year, Runtime } = props.movie;

        this.state = {
            imdbID,
            Title,
            Director,
            Genre,
            Year,
            Runtime
        }
    }

    handleChange = (e) => {
      this.setState({
          [e.target.name]: e.target.value
      })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("SUBMIT");
    };

    render(){
        return (
            <form id="editMovie" onSubmit={ this.handleSubmit }>
                <div>
                    <label>Title:</label>
                    <input type="text" name="Title"  onChange={this.handleChange} value={this.state.Title} />
                </div>
                <div className={styles.flex}>
                    <div>
                        <label>Director:</label>
                        <input type="text" name="Director" onChange={this.handleChange} value={this.state.Director} />
                    </div>
                    <div className={styles.flexColumn}>
                        <label>Year:</label>
                        <input type="number" name="Year" className={styles.inputWidth}
                               onChange={this.handleChange} value={this.state.Year} />
                    </div>
                    <div className={styles.flexColumn}>
                        <label>Runtime:</label>
                        <input type="text" name="Runtime" className={styles.inputWidth}
                               onChange={this.handleChange} value={this.state.Runtime} />
                    </div>
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name="Genre" onChange={this.handleChange} value={this.state.Genre} />
                </div>
            </form>
        )
    }
}

export default EditMovieForm;