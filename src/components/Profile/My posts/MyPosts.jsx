import React from 'react';
import cl from './MyPosts.module.css';
import Post from './Post/Post'

const MyPosts = (props) => {
  return <div>
    <div>
      <Post message = " What's up player ?" likesCount = '3'/>
      <Post message = " It's my first fucking post" likesCount = '0'/>
        </div>
      </div>
} 
export default MyPosts;