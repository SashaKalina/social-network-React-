import React from "react";
import s from "./Post.module.css";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';


let Post = ({ message, like }) => {
  return (
    <div className={s.item}>
      <Avatar
        alt="avatar image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU"
        sx={{ width: 80, height: 80 }}
      />
      <span>{message}</span>
      <div className={s.like}>
	  <ThumbUpIcon /> {like}
      </div>
    </div>
  );
};
export default Post;
