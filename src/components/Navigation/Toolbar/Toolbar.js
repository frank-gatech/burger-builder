import React from 'react';
import someClass from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <header className={someClass.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={someClass.Logo}>
            <Logo />
        </div>
        <nav className={someClass.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;