import { createSelector, createSlice, nanoid } from "@reduxjs/toolkit";
import data from "../../assets/BestSellerData";

const initialState = {
  items: [
    { id: "A001", Qty: 3 },
    { id: "B045", Qty: 1 },
  ],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newId = action.payload;
      const existingItems = state.items.find((item) => item.id === newId);
      if (existingItems) {
        existingItems.Qty += 1;
      } else {
        state.items.push({
          id: newId,
          Qty: 1,
        });
      }
    },
    removeItem: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter((item) => item.id !== idToRemove);
    },

    updateQuantity: (state, action) => {
      const { id, change } = action.payload;
      const itemtoUpdate = state.items.find((item) => item.id === id);

      if (itemtoUpdate) {
        const newQty = itemtoUpdate.Qty + change;
        if (newQty <= 0) {
          state.items = state.items.filter((item) => item.id !== id);
        } else {
          itemtoUpdate.Qty = newQty;
        }
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// --- 4. Define Selectors ---
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = createSelector(
  [selectCartItems], // Dependencies: only run when cart items change
  (items) => {
    return items.reduce((total, item) => {
      const product = data.find((p) => p.id === item.id);
      if (product && product.Price) {
        // Calculate: Price * Quantity
        return total + product.Price * item.Qty;
      }
      return total;
    }, 0);
  }
);
export default cartSlice.reducer;
