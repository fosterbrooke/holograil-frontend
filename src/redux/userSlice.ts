import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    token: null,
    selectedItem: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.access_token;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
  },
});

export const { setUser, clearUser, setSelectedItem } = userSlice.actions;
export default userSlice.reducer;
