import React, { Component } from 'react';
import PropTypes from 'prop-types';
import someClass from './BurgerIngredient.module.css';

class BurgerIngredient extends Component {
    render () {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={someClass.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingredient = (
                    <div className={someClass.BreadTop}>
                        <div className={someClass.Seeds1}></div>
                        <div className={someClass.Seeds2}></div>
                    </div>
                );
                break;
            case ('meat'):
                ingredient = <div className={someClass.Meat}></div>
                break;
            case ('cheese'):
                ingredient = <div className={someClass.Cheese}></div>
                break;
            case ('bacon'):
                ingredient = <div className={someClass.Bacon}></div>
                break;
            case ('salad'):
                ingredient = <div className={someClass.Salad}></div>
                break;
            default:
                ingredient = null;
        }
    
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;