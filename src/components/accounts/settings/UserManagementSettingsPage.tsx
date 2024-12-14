import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CustomInput from './CustomInput'; // Ensure this is the correct path
import CollapsibleSection from './CollapsibleSection'; // Ensure this is the correct path
import RoundButton from '../../RoundButton';
import CustomCheckbox from './CustomCheckbox';
import CustomDropdown from './CustomDropdown';
import { RootState } from '../../../redux/store';

// Sample timezones
const timezones = [
  '(UTC - 8:00) Pacific Time (US and Canada)',
  'Mountain Time (US)',
  'Central Time (US)',
  'Eastern Time (US)',
  'Greenwich Mean Time (GMT)',
  'Central European Time (CET)',
  'India Standard Time (IST)',
  'China Standard Time (CST)',
  'Australian Eastern Standard Time (AEST)',
];

const ProfileManagementSidebar: React.FC = () => {
  const { user } = useSelector((state: RootState) => state.user);

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isPasswordOpen, setIsPasswordOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isTimezoneOpen, setIsTimezoneOpen] = useState(false);

  const [name, setName] = useState(user?.name.split(' ')[0]);
  const [surname, setSurname] = useState(user?.name.split(' ')[1]);
  const [email, setEmail] = useState(user?.email);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [receivePromotions, setReceivePromotions] = useState(false);
  const [receiveAnnouncements, setReceiveAnnouncements] = useState(false);
  const [timezone, setTimezone] = useState(timezones[0]);

  const handlePasswordChange = () => {};

  return (
    <div className="sm:mt-[38px] mt-[20px]">
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
            readonly
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
          onClick={handlePasswordChange}
        />
      </CollapsibleSection>

      {/* Notification Section */}
      <CollapsibleSection
        title="Notification"
        isOpen={isNotificationOpen}
        onToggle={() => setIsNotificationOpen(!isNotificationOpen)}
        content="The Grail will send you notifications"
      >
        <div className="flex flex-col text-black sm:text-[18px] text-[12px] space-y-[19px]">
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
