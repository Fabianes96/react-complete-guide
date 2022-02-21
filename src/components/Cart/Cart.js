import React, { useContext } from "react";
import { CartContext } from "../../store/cart-context";
import { Modal } from "../UI/Modal";
import classes from "./Cart.module.css";

export const Cart = ({hideCart}) => {
  const cartCtx = useContext(CartContext);  
  const totalAmount = `$${cartCtx.amount.toFixed(2)}`;
  const hasItems = cartCtx.meals.length > 0;
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.meals.map((item) => {
        return <li key={Math.random()}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={hideCart} className={classes['button--alt']}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
