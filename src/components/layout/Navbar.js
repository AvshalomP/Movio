import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import formStyle from '../styles/MovieForm.module.css';
import { Modal } from 'react-materialize';
//components
import MovieForm from '../movies/MovieForm';


class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        }
    }

    handleModalClose = () => {
        this.setState({ isModalOpen: false });
    };

    render() {
        const newMovieForm = 'newMovieForm';
        const newMovie = {Title: "", Director: "", Genre: "", Poster: "", Year: "", Runtime: "", imdbID: ""};
        const formSecondBtn = { name: "SAVE", props: { type: "submit", form: newMovieForm } };

        return (
            <div className={styles.navbar}>
                <Link to="/movies">Movio</Link>
                <div>
                    <Modal  className={formStyle.FormPadding}
                            open={this.state.isModalOpen}
                            header='Add New Movie'
                            trigger={<Link className={styles.addBtn} to="/">+ Add New</Link>}
                            actions={[]}
                    >
                        <MovieForm  movie={newMovie}
                                    closeModal={this.handleModalClose}
                                    formSecondBtn={formSecondBtn}
                        />
                    </Modal>
                </div>
            </div>
        )
    }
}


export default Navbar;