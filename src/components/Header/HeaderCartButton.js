import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../store/cart-context';
import CardIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


export const HeaderCartButton = ({showCart}) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
  const cartCtx = useContext(CartContext);
  const {meals} = cartCtx;
  const numberOfCartItems = meals.reduce((currentNumber,item)=>{
    return currentNumber + item.amount
  },0)

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump: ''}`;
  useEffect(() => {
    if(meals.length ===0){
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false)
    }, 300);
    return ()=>{
      clearTimeout(timer)
    };
  }, [meals])
  
  return <button onClick={showCart} className={btnClasses}>
      <span className={classes.icon}>
          <CardIcon />
      </span>
      <span>Your card</span>
      <span className={classes.badge}>
          {numberOfCartItems}
      </span>
  </button>
};
