import React from 'react';
import classes from './MealItem.module.css';

export const MealItem = ({ name,description,price:prc }) => {
    const price = `$${prc.toFixed(2)}`
    return <li className={classes.meal}>
        <div>
            <h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>

        </div>
    </li>;
};
