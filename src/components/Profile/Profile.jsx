import React from 'react';
import Button from '../Button/CustomButton';
import Icon from '../Icon/CustomIcon';

import './Profile.scss';

/**
 * Functional React component displaying the Profile component
 * @function Profile
 * @returns {JSX.Element} - Rendered Profile Component
 */

const Profile = () => (
  <section className="profile">
    <div className="avatar">
      <div className="avatar_container">
        <img src="https://avatars.githubusercontent.com/u/50625838?u=12f0f736f5d063063e8d06c9c968ba9639101735&v=4" alt="profile" className="avatar_pic" />
      </div>
      <div className="avatar_status">
        <Icon icon="smiley" />
      </div>
    </div>
    <div className="info">
      <h1 className="info_fullname">
        Marcel Subirana Campanera
      </h1>
      <h3 className="info_username">
        Marcel2408
      </h3>
      <p className="info_description">
        Software engineer with strong product development background,
        experienced in JavaScript technologies in both frontend and backend.
      </p>
    </div>
    <div className="edit-btn">
      <Button>
        Edit Profile
      </Button>
    </div>
  </section>
);

export default Profile;
