import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import formStyle from '../styles/MovieForm.module.css';
import { Modal, Button } from 'react-materialize';
//components
import MovieForm from '../movies/MovieForm';


class Navbar extends Component {

    generateActions = (props, secondBtnName) => {
        return (
            <div>
                <Button modal="close" waves="light" {...props} flat>{secondBtnName}</Button>
                <Button modal="close" waves="light" flat>CANCEL</Button>
            </div>
        )
    };

    render() {
        const newMovieForm = 'newMovieForm';
        const newMovie = {Title: "", Director: "", Genre: "", Poster: "", Year: "", Runtime: "", imdbID: ""};

        return (
            <div className={styles.navbar}>
                <Link to="/movies">Movio</Link>
                <div>
                    <Modal  className={formStyle.FormPadding}
                            header='Add New Movie'
                            trigger={<Link className={styles.addBtn} to="/">+ Add New</Link>}
                            actions={this.generateActions({ type: "submit", form: newMovieForm }, "SAVE")}
                    >
                        <MovieForm  movie={newMovie}/>
                    </Modal>
                </div>
            </div>
        )
    }
}


export default Navbar;