import React from 'react';
import someClass from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)       //.keys() returns an array of keys
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => <BurgerIngredient key={igKey + i} type = {igKey} />);  //returning adjacent jsx, should add key prop
        })
        .reduce((acc, cur) => {
            return acc.concat(cur);
        },[]);
    
    // An alternate way to not using Array.reduce:
    // let acc = [];
    // transformedIngredients.forEach((cur) => acc.concat(cur));

    /**
     * refer to: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
     * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
     */
    
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    } 
    
    return (
        <div className={someClass.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    );
}

export default burger;