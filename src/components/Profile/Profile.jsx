import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/CustomButton';
import Icon from '../Icon/CustomIcon';

import './Profile.scss';

/**
 * Functional React component displaying the Profile component
 * @function Profile
 * @param {object} profileData - data to display the user info
 * @returns {JSX.Element} - Rendered Profile Component
 */

const Profile = ({ profileData }) => (
  <section className="profile">
    <div className="avatar">
      <div className="avatar_container">
        <img src={profileData.avatarUrl} alt="profile" className="avatar_pic" />
      </div>
      <div className="avatar_status">
        <Icon icon="smiley" />
      </div>
    </div>
    <div className="info">
      <h1 className="info_fullname">
        {profileData.name}
      </h1>
      <h3 className="info_username">
        {profileData.login}
      </h3>
      <p className="info_description">
        {profileData.bio}
      </p>
    </div>
    <div className="edit-btn">
      <Button>
        Edit Profile
      </Button>
    </div>
  </section>
);

Profile.propTypes = {
  profileData: PropTypes.shape(
    {
      avatarUrl: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
      login: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default Profile;
