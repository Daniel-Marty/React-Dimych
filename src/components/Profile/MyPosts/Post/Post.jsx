import React from "react";
import cl from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={cl.item}>
      <img
        src="https://thumbs.dreamstime.com/z/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%B2%D0%BB%D0%B0%D0%B3%D0%B0%D0%BB%D0%B8%D1%89%D0%B5-%D0%B2%D0%BB%D0%B0%D0%B3%D0%B0%D0%BB%D0%B8%D1%89%D0%BD%D0%BE%D0%B5-%D0%BE%D1%82%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%B8%D0%B5-%D0%B8%D0%BB%D0%B8-%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-149506379.jpghttps://thumbs.dreamstime.com/z/%D1%87%D0%B5%D0%BB%D0%BE%D0%B2%D0%B5%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5-%D0%B2%D0%BB%D0%B0%D0%B3%D0%B0%D0%BB%D0%B8%D1%89%D0%B5-%D0%B2%D0%BB%D0%B0%D0%B3%D0%B0%D0%BB%D0%B8%D1%89%D0%BD%D0%BE%D0%B5-%D0%BE%D1%82%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%B8%D0%B5-%D0%B8%D0%BB%D0%B8-%D0%B6%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F-149506379.jpg"
        alt="V"
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
};

export default Post;
