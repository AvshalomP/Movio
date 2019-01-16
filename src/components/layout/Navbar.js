import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import formStyle from '../styles/MovieForm.module.css';
import { Modal, Button } from 'react-materialize';
//components
import MovieForm from '../Movies/MovieForm';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/movies">Movio</Link>
                <div>
                    <Modal header='Add New Movie' className={formStyle.FormPadding}
                           trigger={<Link className={styles.addBtn} to="/">+ Add New</Link>}
                           actions={<div>
                                        <Button type="submit" form='newMovieForm' modal="close" waves="light" flat>SAVE</Button>
                                        <Button modal="close" waves="light" flat>CANCEL</Button>
                                    </div>}
                    >
                        <MovieForm  movie={{Title: "", Director: "", Genre: "", Poster: "", Year: "", Runtime: "", imdbID: ""}}/>
                    </Modal>
                </div>
            </div>
        </div>
    )
};


export default Navbar;