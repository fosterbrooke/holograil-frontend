import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types/User';

interface UserState {
  user: User | null;
  token: string | null;
  loading: boolean; // Add loading state
  selectedItem: string | null;
  selectedAccountsItem: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
  loading: true, // Start in loading state
  selectedItem: null,
  selectedAccountsItem: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.access_token;
      state.loading = false;
    },
    clearUser: (state) => {
      state.user = null;
      state.token = null;
      state.loading = false;
    },
    setSelectedItem: (state, action) => {
      state.selectedItem = action.payload;
    },
    setSelectedAccountsItem: (state, action) => {
      state.selectedAccountsItem = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setUser,
  clearUser,
  setSelectedItem,
  setSelectedAccountsItem,
  setLoading,
} = userSlice.actions;

export default userSlice.reducer;
