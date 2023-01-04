import React from "react";
import { addPost } from "../../redux/state";
import cl from "./Dialogs.module.css";
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    addPost(text);
  };

  let dialogElements = props.dialogs.map((dialogsInfo) => (
    <DialogItem id={dialogsInfo.id} name={dialogsInfo.name} />
  ));
  let messagesElements = props.messages.map((messagesInfo) => (
    <Message id={messagesInfo.id} message={messagesInfo.message} />
  ));
  return (
    <div className={cl.dialogs}>
      <textarea ref={newMessageElement}></textarea>
      <button onClick={addMessage}>Add message</button>
      <div className={cl.dialogs__items}>{dialogElements}</div>
      <div className={cl.messages}>{messagesElements}</div>
    </div>
  );
};
export default Dialogs;
