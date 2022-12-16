import React from 'react';
import { render } from '@testing-library/react';
import cl from '../Navbar/Navbar.module.css'

const Navbar = () => {

    return  <nav className={cl.nav}>
        <ul className={cl.sidebar}>
          <li><a>Profile</a></li>
          <li><a>Messages</a></li>
          <li><a>News</a></li>
          <li><a>Music</a></li>
          <li><a>Settings</a></li>
        </ul>
      </nav>
} 
export default Navbar;