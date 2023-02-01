// import React from "react";
// import { addPost } from "../../redux/store";
// import cl from "./Dialogs.module.css";
// import DialogItem from "./DialogsItem/DialogsItem";
// import Message from "./Message/Message";
// import {
//   addMessageActionCreator,
//   updateNewMessageActionCreator,
// } from "../../redux/store";

// const Dialogs = (props) => {
//   let dialogElements = props.dialogs.map((dialogsInfo) => (
//     <DialogItem id={dialogsInfo.id} name={dialogsInfo.name} />
//   ));
//   let messagesElements = props.messages.map((messagesInfo) => (
//     <Message id={messagesInfo.id} message={messagesInfo.message} />
//   ));
//   let newMessageElement = React.createRef();
//   let addMessage = () => {
//     props.dispatch(addMessageActionCreator());
//   };
//   let onMessageChange = () => {
//     let text = newMessageElement.current.value;
//     let action = updateNewMessageActionCreator(text);
//     props.dispatch(action);
//     console.log(text);
//   };
//   return (
//     <div className={cl.dialogs}>
//       <div className={cl.dialogs__items}>{dialogElements}</div>
//       <div className={cl.messages}>{messagesElements}</div>
//       <button className={cl.addPost__button} onClick={addMessage}>
//         Add Message
//       </button>
//       <textarea
//         onChange={onMessageChange}
//         ref={newMessageElement}
//         value={props.newMessageText}
//       />
//     </div>
//   );
// };
// export default Dialogs;
