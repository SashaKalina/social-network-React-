import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} like={p.like} />
  ));
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.postsBlok}>
      <h3>My posts</h3>
      <div>
        <div>
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="POST"
            style={{ width: 200 }}
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <Button variant="contained" onClick={onAddPost}>
            Add post{" "}
          </Button>
        </div>
        <div className={s.posts}>{postsElements}</div>
      </div>
    </div>
  );
};
export default MyPosts;
