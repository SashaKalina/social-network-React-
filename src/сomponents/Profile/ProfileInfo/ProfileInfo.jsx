import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

function ProfileInfo(props) {
  return (
    <div>

      <div className={s.descriptionBlok}>
        <img alt="asd" src={props.profile?.photos.large} />
        <ProfileStatus status={"Hello my friends"} />
      </div>
    </div>
  );
}
export default ProfileInfo;
