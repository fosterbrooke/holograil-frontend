import {
  hideHeader,
  setSelectedAccountsItem,
  setSelectedItem,
  setSelectedSettingsSubItem,
  setUser,
  showHeader,
} from '../redux/userSlice';
import { accountsHeaderItems, settingsSubItems } from '../types/HeaderItem';
import { AppDispatch } from '../redux/store';

export const initializeLocalStorage = (dispatch: AppDispatch) => {
  const currentPath = location.pathname; // Get current path
  const noHeaderFooterRoutes = ['/accounts', '/login', '/signup'];
  const storedUser = localStorage.getItem('user');
  const storedSelectedItem = localStorage.getItem('selectedItem');
  const storedSelectedAccountsItem = localStorage.getItem(
    'selectedAccountsItem'
  );
  const storedSelectedSettingsSubItem = localStorage.getItem(
    'selectedSettingsSubItem'
  );

  if (storedUser) {
    dispatch(setUser(JSON.parse(storedUser)));
  }

  if (storedSelectedItem) {
    dispatch(setSelectedItem(storedSelectedItem));
  }

  if (storedSelectedAccountsItem) {
    dispatch(setSelectedAccountsItem(storedSelectedAccountsItem));
  }

  if (storedSelectedSettingsSubItem) {
    dispatch(setSelectedSettingsSubItem(storedSelectedSettingsSubItem));
  }

  let currentItem = settingsSubItems.find((item) => item.link === currentPath);
  if (currentItem) {
    dispatch(setSelectedSettingsSubItem(currentItem.name));
    localStorage.setItem('selectedSettingsSubItem', currentItem.name);
  }

  currentItem = accountsHeaderItems.find((item) => item.link === currentPath);
  if (currentItem) {
    dispatch(setSelectedAccountsItem(currentItem.name));
    localStorage.setItem('selectedAccountsItem', currentItem.name);
  }

  const shouldHideHeaderFooter = noHeaderFooterRoutes.some((route) =>
    currentPath.startsWith(route)
  );
  if (shouldHideHeaderFooter) {
    dispatch(hideHeader());
  } else {
    dispatch(showHeader());
  }
};
