import React from "react";
import styles from "./users.module.css";
import userPhoto from "assets/images/user.png";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
	pages.push(i);
	if (i == 10) break;
}

  return (
    <div className={styles.users} >
      <div>
        {pages.map((p) => {
          return (
            <span className={props.currentPage === p && styles.selectedPage}
              onClick={(e) => {props.onPageChanged(p)}}
			  >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"./../profile/ + u.id"}>
                <Avatar
                  img
                  alt="avatar image"
                  src={u.photos.small != null ? u.photos.small : userPhoto}
				  sx={{ width: 100, height: 100 }}
                 // className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  unfollow
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="small"
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  follow
                </Button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
