import React, { useState } from 'react';
import CustomInput from './CustomInput'; // Ensure this is the correct path
import CollapsibleSection from './CollapsibleSection'; // Ensure this is the correct path
import RoundButton from '../../RoundButton';
import CustomCheckbox from './CustomCheckbox';
import CustomDropdown from './CustomDropdown';

const ProfileManagementSidebar: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isTimezoneOpen, setIsTimezoneOpen] = useState(false);

  const [name, setName] = useState('Dilara');
  const [surname, setSurname] = useState('Mataraci');
  const [email, setEmail] = useState('dmataraci@gmail.com');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [receivePromotions, setReceivePromotions] = useState(false);
  const [receiveAnnouncements, setReceiveAnnouncements] = useState(false);
  const [timezone, setTimezone] = useState('Pacific Time (US)');

  // Sample timezones
  const timezones = [
    'Pacific Time (US)',
    'Mountain Time (US)',
    'Central Time (US)',
    'Eastern Time (US)',
    'Greenwich Mean Time (GMT)',
    'Central European Time (CET)',
    'India Standard Time (IST)',
    'China Standard Time (CST)',
    'Australian Eastern Standard Time (AEST)',
  ];

  return (
    <div className="mt-[38px]">
      {/* Profile Section */}
      <CollapsibleSection
        title="Profile"
        isOpen={isProfileOpen}
        onToggle={() => setIsProfileOpen(!isProfileOpen)}
        // content={`${name}, ${surname}, ${email}`}
        content="Name, Surname, Email address"
      >
        <div className="flex flex-col space-y-[11px]">
          <CustomInput
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <CustomInput
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            placeholder="Surname"
          />
          <CustomInput
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
          />
        </div>
      </CollapsibleSection>

      {/* Password Section */}
      <CollapsibleSection
        title="Password"
        isOpen={isPasswordOpen}
        onToggle={() => setIsPasswordOpen(!isPasswordOpen)}
        content={`Your email address is ${email}`}
      >
        <div className="flex flex-col space-y-[11px]">
          <CustomInput
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            placeholder="Current Password"
          />
          <CustomInput
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            placeholder="New Password"
          />
        </div>
        <RoundButton
          text="Update Password"
          className="rounded-[5px] mt-[26px]"
        />
      </CollapsibleSection>

      {/* Notification Section */}
      <CollapsibleSection
        title="Notification"
        isOpen={isNotificationOpen}
        onToggle={() => setIsNotificationOpen(!isNotificationOpen)}
        content="Rateit will send you notifications"
      >
        <div className="flex flex-col text-black text-[18px] space-y-[19px]">
          <CustomCheckbox
            checked={receivePromotions}
            onChange={() => setReceivePromotions(!receivePromotions)}
            label="Receive promotional emails"
          />
          <CustomCheckbox
            checked={receiveAnnouncements}
            onChange={() => setReceiveAnnouncements(!receiveAnnouncements)}
            label="Receive new announcements"
          />
        </div>
      </CollapsibleSection>

      {/* Time Zone Section */}
      <CollapsibleSection
        title="Time Zone"
        isOpen={isTimezoneOpen}
        onToggle={() => setIsTimezoneOpen(!isTimezoneOpen)}
        content={`Your timezone is currently set to: ${timezone}`}
      >
        <CustomDropdown
          options={timezones}
          selectedValue={timezone}
          onChange={setTimezone}
          label="Select Time Zone"
        />
        <RoundButton text="Update" className="rounded-[5px] mt-[19px]" />
      </CollapsibleSection>
    </div>
  );
};

export default ProfileManagementSidebar;
