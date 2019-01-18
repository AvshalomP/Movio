import React from 'react';
import { Field } from 'formik';
import styles from '../styles/Input.module.css';


const Input = (props) => {
    const { errors, touched, name } = props;
    const title = name === "Runtime" ? `${name} (min)` : name;

    return (
        <div className={styles.container}>
            <label htmlFor={name}>{title}</label>
            <Field {...props} />
            {errors[name] && touched[name] ?
                (<div className={styles.error}>{errors[name]}</div>)
                : null}
        </div>
    )
};

export default Input;