import React from 'react';
import { render } from '@testing-library/react';
import cl from './Profile.module.css';
import MyPosts from './My posts/MyPosts';
const Profile = () => {
  return <div>
        <div>
          <img src='https://st.depositphotos.com/1010463/1468/i/600/depositphotos_14687809-stock-photo-sunny-forest-panorama.jpg' />
        </div>
        <div>
          ava + description
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgBTBtjBU5XjbZHOu4GbFUVqNWW6yEKNyCw&usqp=CAU' />
        </div>
      <MyPosts />
      </div>
} 
export default Profile;