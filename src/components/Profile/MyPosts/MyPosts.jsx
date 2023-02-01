// import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/store";

const MyPosts = (props) => {
  // let state = props.state;
  let postElements = props.posts.map((e) => (
    <Post id={e.id} message={e.post} likesCount={e.likesCount} />
  ));

  let newPostText = props.newPostText;
  let onPostChange = (e) => {
    let text = e.target.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
    console.log(text);
  };
  let onMakePostClick = () => {
    let action = addPostActionCreator();
    props.dispatch(action);
  };
  return (
    <div className={cl.posts__block}>
      <h3>My posts</h3>
      <div>
        <textarea
          placeholder="Enter your text, bitch"
          onChange={onPostChange}
          value={newPostText}
        />
      </div>
      <div>
        <button className={cl.addPost__button} onClick={onMakePostClick}>
          Add post
        </button>
      </div>
      <div>{postElements}</div>
    </div>
  );
};
export default MyPosts;
