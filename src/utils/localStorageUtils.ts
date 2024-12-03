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
  console.log(currentPath);

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

    updateCurrentSelection(dispatch, currentPath);
  } catch (error) {
    console.error('Error retrieving data from localStorage', error);
  }

  updateHeaderVisibility(currentPath, dispatch);

  return currentPath;
};
