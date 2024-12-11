import React from 'react';
import SettingsLayout from '../../layouts/SettingsLayout';
import { Route, Routes } from 'react-router-dom';
import SubscriptionsSettingsPage from './settings/SubscriptionsSettingsPage';
import InvoiceSettingsPage from './settings/InvoiceSettingsPage';
import UserManagementSettingsPage from './settings/UserManagementSettingsPage';

const AccountSettings: React.FC = () => {
  return (
    <SettingsLayout>
      <Routes>
        <Route path="/" element={<div>adsfasdfasd</div>} />
        <Route path="subscriptions" element={<SubscriptionsSettingsPage />} />
        <Route path="invoice" element={<InvoiceSettingsPage />} />
        <Route
          path="user-management"
          element={<UserManagementSettingsPage />}
        />
      </Routes>
    </SettingsLayout>
  );
};

export default AccountSettings;
