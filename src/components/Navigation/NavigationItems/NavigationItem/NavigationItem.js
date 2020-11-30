import React from 'react';
import someClass from './NavigationItem.module.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className={someClass.NavigationItem}>
        <NavLink activeClassName={someClass.active} to={props.link} exact={props.exact}>{props.children}</NavLink> 
        {/* this "to" prop determines whether it's in the active route, and it works as an prefix */}
    </li>
);

export default navigationItem;