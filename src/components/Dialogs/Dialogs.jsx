import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messageElements = props.state.messages.map(message => <Message text ={message.message}/>);
  return (
      <div className={s.dialogs}>
          <div className={s.dialogsItem}>
              {dialogsElements}
          </div>
          <div className={s.messages}>
              {messageElements}
          </div>

      </div>
  )
};

export default Dialogs