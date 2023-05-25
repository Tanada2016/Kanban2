import React from "react";
import "./Header.css";
import Profile from "./profile/Profile";

const Header = () => {
  return (
    <header>
      <h1>Awesome Kanban Board</h1>
      <Profile />
    </header>
  );
};

export default Header;
