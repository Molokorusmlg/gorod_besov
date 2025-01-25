import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  id: string;
  password: string;
}

const initialState: UserState = {
  email: "",
  firstName: "",
  lastName: "",
  avatar: "",
  id: "",
  password: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
