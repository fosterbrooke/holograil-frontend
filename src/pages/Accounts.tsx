import React, { useState } from 'react';
import AccountLayout from '../layouts/AccountLayout';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AccountOverview from '../components/accounts/AccountOverview';
import AccountResources from '../components/accounts/AccountResources';
import AccountPlans from '../components/accounts/AccountPlans';
import AccountProducts from '../components/accounts/AccountProducts';
import AccountSettings from '../components/accounts/AccountSettings';

const Accounts: React.FC = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      navigate('/');
    }, 500);
    // navigate(-1); // Navigate back when closing modal
  };
  return (
    <AccountLayout
      isOpen={isModalOpen}
      onClose={handleCloseModal}
      title="Account Settings"
    >
      <Routes>
        <Route path="/" element={<p>Please select a section to view.</p>} />
        <Route path="overview" element={<AccountOverview />} />
        <Route path="resources" element={<AccountResources />} />
        <Route path="plans" element={<AccountPlans />} />
        <Route path="products" element={<AccountProducts />} />
        <Route path="settings" element={<AccountSettings />} />
      </Routes>
    </AccountLayout>
  );
};

export default Accounts;
