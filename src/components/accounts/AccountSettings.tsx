import React from 'react';
import SettingsLayout from '../../layouts/SettingsLayout';
import { Route, Routes } from 'react-router-dom';
import SubscriptionsSettingsPage from './settings/SubscriptionsSettingsPage';
import InvoiceSettingsPage from './settings/InvoiceSettingsPage';
import UserManagementSettingsPage from './settings/UserManagementSettingsPage';

const AccountSettings: React.FC = () => {
  return (
    <SettingsLayout>
      <div></div>
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="subscriptions" element={<SubscriptionsSettingsPage />} />
        <Route path="invoice" element={<InvoiceSettingsPage />} />
        <Route path="management" element={<UserManagementSettingsPage />} />
      </Routes>
    </SettingsLayout>
  );
};

export default AccountSettings;
