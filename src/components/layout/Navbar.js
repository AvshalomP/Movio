import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/movies">Movio</Link>
                <div>
                    <div className={styles.addBtn}>
                        <Link to="/movie/new">+ Add New</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Navbar;