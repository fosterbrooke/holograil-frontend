import { setCartItems } from '../redux/cartSlice';
import { AppDispatch } from '../redux/store';
import {
  setSelectedAccountsItem,
  setSelectedItem,
  setSelectedSettingsSubItem,
  setUser,
} from '../redux/userSlice';
import { updateCurrentSelection, updateHeaderVisibility } from './headerUtils';

export const initializeLocalStorage = (dispatch: AppDispatch) => {
  const currentPath = window.location.pathname; // Get current path

  try {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      dispatch(setUser(JSON.parse(storedUser)));
    }

    const storedSelectedItem = localStorage.getItem('selectedItem');
    if (storedSelectedItem) {
      dispatch(setSelectedItem(storedSelectedItem));
    }

    const storedSelectedAccountsItem = localStorage.getItem(
      'selectedAccountsItem'
    );
    if (storedSelectedAccountsItem) {
      dispatch(setSelectedAccountsItem(storedSelectedAccountsItem));
    }

    const storedSelectedSettingsSubItem = localStorage.getItem(
      'selectedSettingsSubItem'
    );
    if (storedSelectedSettingsSubItem) {
      dispatch(setSelectedSettingsSubItem(storedSelectedSettingsSubItem));
    }

    const cart_items = localStorage.getItem('cart_items');
    if (cart_items) {
      try {
        // Parse the JSON string into a JavaScript array
        const parsedCartItems = JSON.parse(cart_items);
        if (Array.isArray(parsedCartItems)) {
          dispatch(setCartItems(parsedCartItems));
        } else {
          console.error("Invalid cart items format in localStorage.");
        }
      } catch (error) {
        console.error("Failed to parse cart items from localStorage:", error);
      }
    }

    updateCurrentSelection(dispatch, currentPath);
  } catch (error) {
    console.error('Error retrieving data from localStorage', error);
  }

  updateHeaderVisibility(currentPath, dispatch);
};
