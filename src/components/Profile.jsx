import React from 'react';
import { render } from '@testing-library/react';

const Profile = () => {
    return  <div className='content'>
        <div>
          <img src='https://st.depositphotos.com/1010463/1468/i/600/depositphotos_14687809-stock-photo-sunny-forest-panorama.jpg' />
        </div>
        <div>
          ava + description
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJgBTBtjBU5XjbZHOu4GbFUVqNWW6yEKNyCw&usqp=CAU' />
        </div>
        <div>My posts
          <div>New post</div>
        </div>
        <div>
          <div>post 1</div>
          <div>post 2</div>
        </div>
      </div>
} 
export default Profile;