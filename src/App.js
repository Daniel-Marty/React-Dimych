// import { render } from '@testing-library/react';
// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogues from './components/Dialogues/Dialogues';
const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app__wrapper__content'>
        <Profile />
        <Dialogues />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
