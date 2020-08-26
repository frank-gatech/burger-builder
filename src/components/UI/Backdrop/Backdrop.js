import React from 'react';
import someClass from './Backdrop.module.css';

const backdrop = (props) => (
    props.show ? <div className={someClass.Backdrop} onClick={props.clicked}></div> : null
)

export default backdrop;