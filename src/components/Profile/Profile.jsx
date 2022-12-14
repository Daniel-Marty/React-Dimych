import React from "react";
import { render } from "@testing-library/react";
import cl from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} addPost={props.addPost} />
    </div>
  );
};
export default Profile;
