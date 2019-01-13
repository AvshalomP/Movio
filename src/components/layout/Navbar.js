import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/">Movio</Link>
            </div>
        </nav>
    )
};


export default Navbar;