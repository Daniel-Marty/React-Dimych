import React from 'react';
import { render } from '@testing-library/react';
import cl from '../Header/Header.module.css';
const Header = () => {
    return  <header className={cl.header}>
        <img src='https://metro.co.uk/wp-content/uploads/2014/08/sgd_qwsa.jpeg?quality=90&strip=all' height={60} />
      </header>
} 
export default Header;