import CardIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';


export const HeaderCartButton = ({showCart}) => {
  return <button onClick={showCart} className={classes.button}>
      <span className={classes.icon}>
          <CardIcon />
      </span>
      <span>Your card</span>
      <span className={classes.badge}>
          3
      </span>
  </button>
};
