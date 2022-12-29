import React from "react";
import cl from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          width="1000"
          src="https://st.depositphotos.com/1010463/1468/i/600/depositphotos_14687809-stock-photo-sunny-forest-panorama.jpg"
        />
      </div>
      <div className={cl.infoDescription}>ava + description</div>
    </div>
  );
};
export default ProfileInfo;
