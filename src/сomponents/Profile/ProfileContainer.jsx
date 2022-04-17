import React, { useEffect } from "react";
import { connect } from "react-redux";
import { usersAPI } from "api/api";
import { setUserProfile } from "redux/profile-reducer";
import Profile from "./Profile";

const ProfileContainerFunc = ({ props, profile, setUserProfile }) => {
  useEffect(() => {
    usersAPI.getProfile().then((response) => {
      setUserProfile(response.data);
    });
  }, []);

  return <Profile {...props} profile={profile} />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});

export default connect(mapStateToProps, { setUserProfile })(
  ProfileContainerFunc
);
