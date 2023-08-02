import React from 'react';
import './styles.css';

function Profile({ profile }) {
  return (
    <div className="profile">
      <h2>{profile.name}</h2>
      <p>{profile.bio}</p>
      {/* Add other profile details here */}
    </div>
  );
}

export default Profile;
