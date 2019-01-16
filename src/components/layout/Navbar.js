import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import formStyle from '../styles/NewMovieForm.module.css';
import { Modal, Button } from 'react-materialize';
//components
import NewMovieForm from '../Movies/NewMovieForm';

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
                        <NewMovieForm />
                    </Modal>
                </div>
            </div>
        </div>
    )
};


export default Navbar;