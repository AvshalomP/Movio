import React, { Component } from 'react';
import styles from '../styles/MovieForm.module.css';
import { connect } from 'react-redux';
import { addMovie, editMovie } from "../../store/actions/movies";
//components
import Input from '../generic/Input';

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
                <Input type="text" name="Title" onChange={this.handleChange} value={Title}/>
                <Input type="text" name="Director" onChange={this.handleChange} value={Director} />
                <Input type="text" name="Genre" onChange={this.handleChange} value={Genre} />
                <Input type="text" name="Poster" disabled={this.props.movie.Poster ? "disabled" : ""}
                       onChange={this.handleChange} value={Poster} />
                <div className={styles.flex}>
                    <Input type="number" name="Year" className={styles.inputWidth}
                           onChange={this.handleChange} value={Year} />
                    <Input type="text" name="Runtime" className={styles.inputWidth}
                           onChange={this.handleChange} value={Runtime} />
                    <Input type="text" name="imdbID" className={styles.inputWidth}
                           disabled={this.props.movie.imdbID ? "disabled" : ""}
                           onChange={this.handleChange} value={imdbID} />
                </div>
            </form>
        )
    }
}

export default connect(null, {addMovie, editMovie})(MovieForm);