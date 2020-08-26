import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import someClass from './Logo.module.css';

const logo = (props) => (
    <div className={someClass.Logo}>
        <img  src={burgerLogo} alt='MyBurger' />
    </div>
);

export default logo;