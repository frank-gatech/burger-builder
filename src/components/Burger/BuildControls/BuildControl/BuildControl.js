import React from 'react';
import someClass from './BuildControl.module.css';

const buildControl = (props) => (
    <div className={someClass.BuildControl}>
        <div className={someClass.Label}>{props.label}</div>
        <button className={someClass.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
        <button className={someClass.More} onClick={props.added}>More</button>
    </div>
)

export default buildControl;