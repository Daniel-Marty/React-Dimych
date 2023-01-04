import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postElements = props.posts.map((postInfo) => (
    <Post
      id={postInfo.id}
      message={postInfo.post}
      likesCount={postInfo.likesCount}
    />
  ));
  let newPostElement = React.createRef();
  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };
  return (
    <div className={cl.posts__block}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement} cols="30" rows="1"></textarea>
      </div>
      <div>
        <button className={cl.addPost__button} onClick={addPost}>
          Add post
        </button>
      </div>
      <div>{postElements}</div>
    </div>
  );
};
export default MyPosts;
