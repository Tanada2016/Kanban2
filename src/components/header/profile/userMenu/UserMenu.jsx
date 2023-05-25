import React, { useState } from "react";
import "./UserMenu.css";
import arrow from "./arrow.svg";

const UserMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsOpened(!isOpened);
  };

  return (
    <>
      <a
        href="#"
        className={`menu-button${isOpened ? " opened" : ""}`}
        onClick={handleClick}
      >
        <img src={arrow} alt="Open User's Menu" />
      </a>
      {isOpened && (
        <div className="user-menu">
          <a href="#" className="account">
            Profile
          </a>
          <a href="#" className="logout">
            Log Out
          </a>
        </div>
      )}
    </>
  );
};

export default UserMenu;
