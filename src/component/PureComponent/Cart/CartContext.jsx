import React, { createContext, useState, useContext } from "react";

// 1. Create the Context
const CartContext = createContext();

// 2. Custom Hook to use the Cart Context easily
export const useCart = () => useContext(CartContext);

// 3. Provider Component that holds the state and logic
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: "A001", Qty: 3 },
    { id: "B045", Qty: 1 },
  ]);

  /**
   * Centralized function to add a new item or increment an existing item's quantity.
   * @param {string} newId - The ID of the product to add or update.
   */
  const handleAddItemToCart = (newId) => {
    setCartItems((prevItems) => {
      const currentProduct = prevItems.find((item) => item.id === newId);

      // Case 1: Product exists (Increment Qty)
      if (currentProduct) {
        return prevItems.map((item) => {
          if (item.id === newId) {
            return {
              ...item,
              Qty: item.Qty + 1,
            };
          }
          return item;
        });
      }
      // Case 2: Product does NOT exist (Add new item)
      else {
        return [
          ...prevItems,
          {
            id: newId,
            Qty: 1,
          },
        ];
      }
    });
  };

  // Placeholder for other actions (You can expand this later)
  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const contextValue = {
    cartItems,
    handleAddItemToCart, // This is the function other components will call
    handleRemoveItem,
    // ... any other state/functions you need globally
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};
