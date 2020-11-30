import React from 'react';
import someClass from './Button.module.css';

const button = (props) => (
    <button 
        disabled={props.disabled}
        className={[someClass.Button, someClass[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
);

export default button;
