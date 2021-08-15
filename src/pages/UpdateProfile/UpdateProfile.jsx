import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import ProfileForm from '../../components/ProfileForm/ProfileForm'

const UpdateProfile = ({ userProfile, handleUpdateProfile }) => {
  return (
    <>
    <h1>Update Your Profile</h1>
    <ProfileForm userProfile={userProfile} handleUpdateProfile={handleUpdateProfile} /> 
    </>
  );
}
 
export default UpdateProfile;