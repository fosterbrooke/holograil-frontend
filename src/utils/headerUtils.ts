import { AppDispatch } from '../redux/store';
import {
  hideHeader,
  setSelectedAccountsItem,
  setSelectedItem,
  setSelectedSettingsSubItem,
  showHeader,
} from '../redux/userSlice';
import {
  accountsHeaderItems,
  headerItems,
  settingsSubItems,
} from '../types/HeaderItem';

export const updateHeaderVisibility = (
  currentPath: string,
  dispatch: AppDispatch
) => {
  const noHeaderFooterRoutes = ['/accounts', '/login', '/signup', '/404'];
  const shouldHideHeaderFooter = noHeaderFooterRoutes.some((route) =>
    currentPath.startsWith(route)
  );

  if (shouldHideHeaderFooter) {
    dispatch(hideHeader());
  } else {
    dispatch(showHeader());
  }
};

export const updateCurrentSelection = (
  dispatch: AppDispatch,
  currentPath: string
) => {
  let currentItem = headerItems.find((item) => item.link === currentPath);
  if (currentItem) {
    dispatch(setSelectedItem(currentItem.name));
    localStorage.setItem('selectedItem', currentItem.name);
  }

  currentItem = settingsSubItems.find((item) => item.link === currentPath);
  if (currentItem) {
    dispatch(setSelectedSettingsSubItem(currentItem.name));
    localStorage.setItem('selectedSettingsSubItem', currentItem.name);
  }

  currentItem = accountsHeaderItems.find((item) => item.link === currentPath);
  if (currentItem) {
    dispatch(setSelectedAccountsItem(currentItem.name));
    localStorage.setItem('selectedAccountsItem', currentItem.name);
  }
};
