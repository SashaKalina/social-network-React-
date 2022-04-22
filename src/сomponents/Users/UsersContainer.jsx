import React, { useEffect } from "react";
import { connect } from "react-redux";
import {  follow,  setCurrentPage,  unfollow,  getUsers,} from "redux/users-reducer";
import Users from "./Users";

const UsersContainer = ({onPageChanged, currentPage, pageSize, totalUsersCount, users, follow, unfollow, getUsers, pageNumber}) => {
  useEffect(() => {
    getUsers(currentPage, pageSize);
  }, []);

  onPageChanged = (pageNumber) => {
    getUsers(pageNumber, pageSize);
  };
  return (
    <Users
      totalUsersCount={totalUsersCount}
      pageSize={pageSize}
      currentPage={currentPage}
      onPageChanged={onPageChanged}
      users={users}
      follow={follow}
      unfollow={unfollow}
	 
    />
  );
};
let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
export default connect(mapStateToProps, {
  follow,
  unfollow,
  setCurrentPage,
  getUsers,
  })(UsersContainer);
