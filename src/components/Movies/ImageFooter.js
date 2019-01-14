import React from 'react';
import styles from '../styles/ImageFooter.module.css';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const ImageFooter = () => {
    return (
        <div className={styles.imgFooter}>
            <IconContext.Provider value={{color: '#26a69a', size: '1.4em'}}>
                <div className={styles.editIcon}><FaEdit /></div>
            </IconContext.Provider>
            <IconContext.Provider value={{color: '#E57373', size: '1.2em'}}>
                <div className={styles.removeIcon}><FaTrashAlt /></div>
            </IconContext.Provider>
        </div>
    )
};


export default ImageFooter;