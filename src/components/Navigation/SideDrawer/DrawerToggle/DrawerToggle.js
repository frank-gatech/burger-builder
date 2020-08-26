import React from 'react';
import someClass from './DrawerToggle.module.css';

const drwaerToggle = (props) => (
    <div className={someClass.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drwaerToggle;