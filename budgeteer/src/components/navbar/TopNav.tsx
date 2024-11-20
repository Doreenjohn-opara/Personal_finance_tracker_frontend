import React, { useState } from "react";
import {
  Search,
  Notifications,
  Brightness4,
  Brightness7,
  ArrowDropDown,
} from "@mui/icons-material";
import profilePicture from "../../assets/profile.jpeg";
import { useDarkMode } from "../../hook/darkmode.hook";

const TopNav = ({isCollapsed} : {isCollapsed: boolean}) => {

  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <>
      <div className={`topnav ${isCollapsed ? "collapsed" : ""}`}>
        {/* Search Bar */}
        <div className="search-container">
          <Search className="search-icon" />
          <input type="text" placeholder="Search..." className="search-input" />
        </div>

        {/* Right Section */}
        <div className="right-section">
          {/* Dark Mode Toggle */}
          <div className="icon" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <Brightness7 className="theme-icon" />
            ) : (
              <Brightness4 className="theme-icon" />
            )}
          </div>

          {/* Notifications */}
          <div
            className="icon notification-icon"
            onClick={() => setShowNotifications(!showNotifications)}>
            <Notifications />
            {showNotifications && (
              <div className="notification-dropdown">
                <ul>
                  <li className="fe fe-minus-circle">Account created successfully</li>
                  <li className="fe fe-alert-triangle">Phone Verification Pending</li>
                  <li className="fe fe-check-circle">Income saved succesfully</li>
                  <li className="fe fe-check-circle">Budget saved successfully</li>
                </ul>
              </div>
            )}
          </div>

          {/* Profile Menu */}
          <div
            className="profile-menu"
            onClick={() => setShowProfileMenu(!showProfileMenu)}>
            <img
              src={profilePicture} // Replace with user profile picture
              alt="Profile"
              className="profile-pic"
            />
            {showProfileMenu && (
              <div className="profile-dropdown">
                <ul>
                  <li>View Profile</li>
                  <li>Settings</li>
                  <li>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopNav;
