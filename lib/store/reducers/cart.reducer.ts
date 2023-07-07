import { RootState } from "./../index";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICart } from "../../../@types/ICart";

interface CartState {
  items: ICart[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ICart>) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (!index) {
        console.warn("can´t remove product as its not in basket");
      }

      state.items.splice(index, 1);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemsCount = (state: RootState) =>
  state.cart.items.length;

export const selectCartTotal = (state: RootState) => {
  return state.cart.items.reduce((total, item) => (total += item.price), 0);
};

export default cartSlice.reducer;
