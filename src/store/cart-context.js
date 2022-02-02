import React, { useState } from "react";

export const CartContext = React.createContext({
  meals: [],
  amount: 0,
  onAddItem: () => {},
  onRemoveItem: () => {},
});

export const CartContextPrivider = ({ children }) => {
  const [meal, setMeal] = useState([]);

  const addItemHandler = () => {
    setMeal((prev) => {
      return [...prev, meal];
    });
  };
  const removeItemHandler = () => {};
  return (
    <CartContext.Provider
      value={{
        meals: meal,
        amount: 0,
        onAddItem: addItemHandler,
        onRemoveItem: removeItemHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
