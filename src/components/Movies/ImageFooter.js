import React from 'react';
import styles from '../styles/ImageFooter.module.css';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Modal, Button } from 'react-materialize';


const ImageFooter = (props) => {
    const { deleteMovie, title } = props;
    return (
        <div className={styles.imgFooter}>
            <IconContext.Provider value={{color: '#26a69a', size: '1.4em'}}>
                <div className={styles.editIcon}><FaEdit /></div>
            </IconContext.Provider>
            <IconContext.Provider value={{color: '#E57373', size: '1.2em'}}>
                <Modal
                    header='Confirm Delete'
                    trigger={<div className={styles.removeIcon}><FaTrashAlt/></div>}
                    actions={<div>
                                <Button modal="close" waves="light" onClick={deleteMovie} flat>OK</Button>
                                <Button modal="close" waves="light" flat>CANCEL</Button></div>}
                >
                    <p>Are you sure you want to delete the movie "{title}"?</p>
                </Modal>
            </IconContext.Provider>
        </div>
    )
};


export default ImageFooter;