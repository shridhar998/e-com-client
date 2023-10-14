import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

function cartReducer(cart, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...cart, action.payload];
      case 'REMOVE_FROM_CART':
        return cart.filter((item) => item.id !== action.payload.id);
      default:
        return cart;
    }
  }

export function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
