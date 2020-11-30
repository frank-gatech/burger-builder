import React from 'react';
import someClass from './Input.module.css';

const input = (props) => {
    let inputElement = null;
    const inputClasses = [someClass.InputElement];

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses.push(someClass.Invalid);
    }

    switch(props.elementType) {
        case('input'):
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case('texrarea'):
            inputElement = <textarea className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
            break;
        case('select'):
            inputElement = (
                <select className={inputClasses.join(' ')} value={props.value} onChange={props.changed}>
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>{option.displayValue}</option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed}/>
    }

    return (
        <div className={someClass.Input}>
            <label className={someClass.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}

export default input;