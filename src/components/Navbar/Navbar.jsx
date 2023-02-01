import React from "react";
import cl from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={cl.nav}>
      <ul className={cl.sidebar}>
        <li>
          <NavLink
            to="/profile"
            className={(navData) => (navData.isActive ? cl.active : cl.item)}
          >
            Profile
          </NavLink>
        </li>
        {/* <li>
          <NavLink
            to="/dialogs"
            className={(navData) => (navData.isActive ? cl.active : cl.item)}
          >
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/news"
            className={(navData) => (navData.isActive ? cl.active : cl.item)}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/music"
            className={(navData) => (navData.isActive ? cl.active : cl.item)}
          >
            Music
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/settings"
            className={(navData) => (navData.isActive ? cl.active : cl.item)}
          >
            Settings
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};
export default Navbar;
