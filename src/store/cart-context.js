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
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if(existingCartItem){      
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex]= updatedItem
    }else{
      updatedItems= [...state.items, action.item]
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
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
        amount: cartState.totalAmount,
        onAddItem: addItemHandler,
        onRemoveItem: removeItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
