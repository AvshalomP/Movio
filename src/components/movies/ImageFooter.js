import React, { Component } from 'react';
import styles from '../styles/ImageFooter.module.css';
import { Modal, Button, Icon } from 'react-materialize';
//components
import MovieForm from './MovieForm';


class ImageFooter extends Component {
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false,
            clearForm: false
        }
    }

    handleModalConfirm = () => {
        this.setState({ isModalOpen: false });
    };

    generateActions = (props, secondBtnName) => {
        return (
            <div>
                <Button {...props} flat>{secondBtnName}</Button>
                <Button modal="close" flat>CANCEL</Button>
            </div>
        )
    };

    render() {
        const { deleteMovie, movie } = this.props;
        const formSecondBtn = { name: "SAVE", props: { type: "submit", form: movie.imdbID } };

        return (
            <div className={styles.imgFooter}>
                <Modal  className={styles.editFormPadding}
                        open={this.state.isModalOpen}
                        header='Edit Movie'
                        trigger={<div className={styles.editIcon}><Icon>edit</Icon></div>}
                        actions={[]}
                >
                    <MovieForm movie={movie}
                               closeModal={this.handleModalConfirm}
                               clearForm={this.state.clearForm}
                               formSecondBtn={formSecondBtn}
                    />
                </Modal>
                <Modal  className={styles.deleteFormPadding}
                        header='Confirm Delete'
                        trigger={<div className={styles.removeIcon}><Icon>delete</Icon></div>}
                        actions={this.generateActions({ onClick: deleteMovie, modal: "close" }, "OK")}
                >
                    <p>Are you sure you want to delete the movie "{movie.Title}"?</p>
                </Modal>
            </div>
        )

    }
}


export default ImageFooter;