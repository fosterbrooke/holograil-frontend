import { createSlice } from '@reduxjs/toolkit';
import { User } from '../types/User';

interface UserState {
  user: User | null;
  token: string | null;
  loading: boolean; // Add loading state
  selectedItem: string | null;
  selectedAccountsItem: string | null;
  selectedSettingsSubItem: string | null;
  headerVisible: boolean;
}

const initialState: UserState = {
  user: null,
  token: null,
  loading: true, // Start in loading state
  selectedItem: null,
  selectedAccountsItem: null,
  selectedSettingsSubItem: null,
  headerVisible: true,
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
    setSelectedSettingsSubItem: (state, action) => {
      state.selectedSettingsSubItem = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    showHeader: (state) => {
      state.headerVisible = true;
    },
    hideHeader: (state) => {
      state.headerVisible = false;
    },
  },
});

export const {
  setUser,
  clearUser,
  setSelectedItem,
  setSelectedAccountsItem,
  setSelectedSettingsSubItem,
  setLoading,
  showHeader,
  hideHeader,
} = userSlice.actions;

export default userSlice.reducer;
