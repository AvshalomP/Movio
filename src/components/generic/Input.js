import React from 'react';

const style = {
    display: 'flex',
    flexDirection: 'column'
};

const Input = (props) => {
    return (
        <div style={style}>
            <label>{props.name}</label>
            <input {...props} />
        </div>
    )
};

export default Input;