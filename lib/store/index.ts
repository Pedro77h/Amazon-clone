import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/user.reducer";
import cartReducer from "./reducers/cart.reducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
