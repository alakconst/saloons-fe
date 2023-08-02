// ProfilePage.js
// This page will be inside src file.

import React from 'react';
import Profile from './Profile';

const companyProfile = {
  // Company profile data here
};

const members = [
  // Individual members' profile data here
];

function ProfilePage() {
  return (
    <div className="profile-page">
      <h1>Our Profile</h1>
      <Profile profile={companyProfile} />
      <h2>Our Members</h2>
      {members.map((member) => (
        <Profile key={member.id} profile={member} />
      ))}
    </div>
  );
}

export default ProfilePage;
