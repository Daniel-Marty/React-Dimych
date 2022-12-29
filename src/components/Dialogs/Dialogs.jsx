import React from "react";
import cl from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let dialogElements = props.dialogs.map((dialogsInfo) => (
    <DialogItem id={dialogsInfo.id} name={dialogsInfo.name} />
  ));
  let messagesElements = props.messages.map((messagesInfo) => (
    <Message id={messagesInfo.id} message={messagesInfo.message} />
  ));
  return (
    <div className={cl.dialogs}>
      <div className={cl.dialogs__items}>{dialogElements}</div>
      <div className={cl.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
