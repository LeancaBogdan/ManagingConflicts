import React from 'react'

import classes from './ProfileImage.module.css';
import defaultProfileImage from '../../../../assets/default-profile-image.png'

const profileImage = (props) => {
  return (
    <div className={classes.ProfileImage}>
      <img src={defaultProfileImage} alt="Profile"/>
    </div>
  );
}

export default profileImage;