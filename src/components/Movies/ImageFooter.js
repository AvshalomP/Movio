import React from 'react';
import styles from '../styles/ImageFooter.module.css';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Modal, Button } from 'react-materialize';
//components
import EditMovieForm from './EditMovieForm';


const ImageFooter = (props) => {
    const { deleteMovie, movie } = props;

    return (
        <div className={styles.imgFooter}>
            <IconContext.Provider value={{color: '#26a69a', size: '1.4em'}}>
                <Modal header='Edit Movie' className={styles.editFormPadding}
                    trigger={<div className={styles.editIcon}><FaEdit /></div>}
                    actions={<div><Button type="submit" form={movie.imdbID} modal="close" waves="light" flat>SAVE</Button>
                                  <Button modal="close" waves="light" flat>CANCEL</Button></div>}
                >
                    <EditMovieForm movie={movie}/>
                </Modal>
            </IconContext.Provider>
            <IconContext.Provider value={{color: '#E57373', size: '1.2em'}}>
                <Modal header='Confirm Delete' className={styles.deleteFormPadding}
                    trigger={<div className={styles.removeIcon}><FaTrashAlt/></div>}
                    actions={<div><Button modal="close" waves="light" onClick={deleteMovie} flat>OK</Button>
                                  <Button modal="close" waves="light" flat>CANCEL</Button></div>}
                >
                    <p>Are you sure you want to delete the movie "{movie.Title}"?</p>
                </Modal>
            </IconContext.Provider>
        </div>
    )
};


export default ImageFooter;