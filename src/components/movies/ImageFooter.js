import React, { Component } from 'react';
import styles from '../styles/ImageFooter.module.css';
import { Modal, Button, Icon } from 'react-materialize';
//components
import MovieForm from './MovieForm';


class ImageFooter extends Component {

    generateActions = (props, secondBtnName) => {
        return (
            <div>
                <Button modal="close" waves="light" {...props} flat>{secondBtnName}</Button>
                <Button modal="close" waves="light" flat>CANCEL</Button>
            </div>
        )
    };

    render() {
        const { deleteMovie, movie } = this.props;

        return (
            <div className={styles.imgFooter}>
                <Modal  className={styles.editFormPadding}
                        header='Edit Movie'
                        trigger={<div className={styles.editIcon}><Icon>edit</Icon></div>}
                        actions={this.generateActions({ type: "submit", form: movie.imdbID }, "SAVE")}
                >
                    <MovieForm movie={movie}/>
                </Modal>
                <Modal  className={styles.deleteFormPadding}
                        header='Confirm Delete'
                        trigger={<div className={styles.removeIcon}><Icon>delete</Icon></div>}
                        actions={this.generateActions({ onClick: deleteMovie }, "OK")}
                >
                    <p>Are you sure you want to delete the movie "{movie.Title}"?</p>
                </Modal>
            </div>
        )

    }
}


export default ImageFooter;