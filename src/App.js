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
import { Route, Routes } from 'react-router-dom';
import { addPost } from './redux/state';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app__wrapper__content'>
        <Routes>
          <Route path="/dialogs/*" element={<Dialogs dialogs={props.state.messagesPage.dialogs}
            messages={props.state.messagesPage.messages} />} />
          <Route path='/profile/*' element={<Profile posts={props.state.profilePage.posts} addPost={props.addPost} />} />
          <Route path='/news' element={<News />} />
          <Route path='/music' element={<Music />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
