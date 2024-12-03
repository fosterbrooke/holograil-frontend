import React, { useState } from 'react';
import AccountLayout from '../layouts/AccountLayout';
import {
  Routes,
  Route,
  useNavigate,
  Navigate,
} from 'react-router-dom';
import AccountOverview from '../components/accounts/AccountOverview';
import AccountResources from '../components/accounts/AccountResources';
import AccountPlans from '../components/accounts/AccountPlans';
import AccountProducts from '../components/accounts/AccountProducts';
import AccountSettings from '../components/accounts/AccountSettings';
import { useDispatch, useSelector } from 'react-redux';
import { showHeader } from '../redux/userSlice';
import { RootState } from '../redux/store';
import { convertToSlug } from '../utils/urlNormalization';

const Accounts: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selectedSettingsSubItem = useSelector(
    (state: RootState) => state.user.selectedSettingsSubItem
  );
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      dispatch(showHeader());
      navigate('/');
    }, 500);
  };
  return (
    <AccountLayout
      isOpen={isModalOpen}
      onClose={handleCloseModal}
    // title="Account Settings"
    >
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="overview" element={<AccountOverview />} />
        <Route path="resources" element={<AccountResources />} />
        <Route path="plans" element={<AccountPlans />} />
        <Route path="products" element={<AccountProducts />} />
        <Route path="settings/*" element={<AccountSettings />} />
        <Route
          path="settings"
          element={
            selectedSettingsSubItem ? (
              <Navigate to={convertToSlug(selectedSettingsSubItem)} replace />
            ) : (
              <Navigate to="settings/subscriptions" replace />
            )
          }
        />
      </Routes>
    </AccountLayout>
  );
};

export default Accounts;
