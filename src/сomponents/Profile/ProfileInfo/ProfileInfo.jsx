import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
  return (
    <div>
      <div className={s.picture}>
        <img src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      </div>
      <div className={s.descriptionBlok}>
        <img alt="asd" src={props.profile?.photos.large} />
        <ProfileStatus status={"Hello my friends"} />
      </div>
    </div>
  );
}
export default ProfileInfo;
