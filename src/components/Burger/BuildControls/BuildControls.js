import React from 'react';
import someClass from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={someClass.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => 
            <BuildControl
                key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRmoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        )}
        <button 
            className={someClass.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}>
                {props.isAuth ? 'ORDER NOW' : 'SIGNUP TO ORDER'}
        </button>
    </div>
)

export default buildControls;