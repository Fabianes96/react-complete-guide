import React from "react";
import { Modal } from "../UI/Modal";
import classes from "./Cart.module.css";

export const Cart = ({hideCart}) => {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => {
        return <li key={item.id}>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal hideCart={hideCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>35.61</span>
      </div>
      <div className={classes.actions}>
        <button onClick={hideCart} className={classes['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
