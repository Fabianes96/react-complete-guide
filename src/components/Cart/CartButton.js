import classes from './CartButton.module.css';
import {useDispatch} from 'react-redux';
import { uiActions } from '../../store/UISlice';
import { useSelector } from 'react-redux';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const quantity = useSelector(state=> state.cart.totalQuantity);
  const toggleCartHandler = ()=>{
    dispatch(uiActions.toggle());
  }
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
