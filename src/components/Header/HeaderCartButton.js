import { useContext } from 'react';
import { CartContext } from '../../store/cart-context';
import CardIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


export const HeaderCartButton = ({showCart}) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.meals.reduce((currentNumber,item)=>{
    return currentNumber + item.amount
  },0)
  return <button onClick={showCart} className={classes.button}>
      <span className={classes.icon}>
          <CardIcon />
      </span>
      <span>Your card</span>
      <span className={classes.badge}>
          {numberOfCartItems}
      </span>
  </button>
};
