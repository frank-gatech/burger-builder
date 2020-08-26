import React from 'react';
import someClass from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={someClass.NavigationItem}>
        <a href={props.link} className={props.active ? someClass.active : null}>{props.children}</a>
    </li>
);

export default navigationItem;