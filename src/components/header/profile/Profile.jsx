import React from "react";
import "./Profile.css";
import picture from "./profile.svg";
import UserMenu from "./userMenu/UserMenu";

const Profile = () => {
  return (
    <div className="profile">
      <img className="userpic" src={picture} alt="Profile Picture" />
      <UserMenu />
    </div>
  );
};

export default Profile;
