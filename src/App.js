// import { render } from '@testing-library/react';
// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

let dialogs = [
  { id: 1, name: "Bitch" },
  { id: 2, name: "FUck" },
  { id: 3, name: "Fahuk" },
  { id: 4, name: "Cunt" },
  { id: 5, name: "Cock" },
  { id: 6, name: "AssEater" },
];
let messages = [
  { id: 1, message: "What the fuck, man?" },
  { id: 2, message: "I'll finish you off" },
  { id: 3, message: "Don't make me run" },
  { id: 4, message: "I want some coffee" },
  { id: 5, message: "Gimme a break" },
  { id: 6, message: "I hope you like the words 'pick up the cell'" },
];
const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app__wrapper__content'>
          <Routes>
            <Route path="/dialogs*" element={<Dialogs dialogs={dialogs} messages={messages} />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/news' element={<News />} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
