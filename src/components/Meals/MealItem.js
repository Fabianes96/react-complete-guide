import React, { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import classes from './MealItem.module.css';
import { MealItemForm } from './MealItemForm';

export const MealItem = ({ name,description,price:prc, id }) => {
    const price = `$${prc.toFixed(2)}`;
    const cartCtx = useContext(CartContext)
    const addToCartHandler = amount =>{
      cartCtx.onAddItem({
        id: id,
        name: name,
        amount: amount,
        price: prc
      })
    }
    return <li className={classes.meal}>
        <div>
            <h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealItemForm id={id} onAddToCart={addToCartHandler} />
        </div>
    </li>;
};
