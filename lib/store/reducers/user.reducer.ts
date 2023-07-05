import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User as FirebaseUser } from "firebase/auth";
import { RootState } from "..";

interface UserState {
  user: FirebaseUser | null;
}

const initialState: UserState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<FirebaseUser>) => {
      state.user = action.payload;
    },
    singOut: (state) => {
      state.user = null;
    },
  },
});

export const { signIn, singOut } = userSlice.actions;

export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer;
