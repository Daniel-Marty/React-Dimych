import React from "react";
import cl from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsData = [
    { id: 1, post: "What up", likesCount: 3 },
    { id: 2, post: "It's my second fucking post", likesCount: 2 },
    { id: 3, post: "Well, it's coming", likesCount: 5 },
    { id: 4, post: "you didn't see it's coming", likesCount: 0 },
    { id: 5, post: "Cock", likesCount: 7 },
    { id: 6, post: "AssEater", likesCount: 5 },
  ];
  let postElements = postsData.map((postInfo) => (
    <Post
      id={postInfo.id}
      message={postInfo.post}
      likesCount={postInfo.likesCount}
    />
  ));
  return (
    <div className={cl.posts__block}>
      <h3>My posts</h3>
      <div>
        <textarea name="" id="" cols="30" rows="1"></textarea>
      </div>
      <div>
        <button className={cl.addPost__button}>Add post</button>
      </div>
      <div>{postElements}</div>
    </div>
  );
};
export default MyPosts;
