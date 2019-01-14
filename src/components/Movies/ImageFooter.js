import React from 'react';
import styles from '../styles/ImageFooter.module.css';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { IconContext } from 'react-icons';


const ImageFooter = () => {
    return (
        <div className={styles.imgFooter}>
            <IconContext.Provider value={{color: '#65B4F3', size: '1.2em'}}>
                <div className={styles.hoverOpacity}><FaEdit /></div>
            </IconContext.Provider>
            <IconContext.Provider value={{color: 'red', size: '1.2em'}}>
                <div className={styles.hoverOpacity}><FaTrashAlt /></div>
            </IconContext.Provider>
        </div>
    )
};


export default ImageFooter;