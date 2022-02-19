import React, { useReducer, useState } from "react";

export const CartContext = React.createContext({
  meals: [],
  amount: 0,
  onAddItem: (item) => {},
  onRemoveItem: (id) => {},
});

const initialCart ={
  items:[],
  totalAmount: 0,
}

const cartReducer =(state,action)=>{
  if(action.type==="ADD_ITEM"){
    return {
      items: [...state.items,action.item],
      totalAmount: state.totalAmount + action.item.price * action.item.amount
    }
  }
  return state;
}

export const CartContextPrivider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer,initialCart);

  const addItemHandler = (item) => {     
    dispatch({
      type: 'ADD_ITEM',
      item: item
    })
  };
  const removeItemHandler = () => {};
  return (
    <CartContext.Provider
      value={{
        meals: cartState.items,
        totalAmount: cartState.amount,
        onAddItem: addItemHandler,
        onRemoveItem: removeItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
