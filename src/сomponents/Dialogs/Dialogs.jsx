import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import Button from "@mui/material/Button";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message message={message.message} key={message.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let addMessage = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div>{dialogsElements}</div>
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea
            value={newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your messadge"
          ></textarea>
        </div>
        <div>
          <Button variant="contained" 
		  onClick={addMessage}> Send </Button>
        </div>
      </div>
    </div>
  );
};
export default Dialogs;
