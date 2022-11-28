import React from 'react';
import { render } from '@testing-library/react';

const Navbar = () => {
    return  <nav className='nav'>
        <ul className='sidebar'>
          <li><a>Profile</a></li>
          <li><a>Messages</a></li>
          <li><a>News</a></li>
          <li><a>Music</a></li>
          <li><a>Settings</a></li>
        </ul>
      </nav>
} 
export default Navbar;