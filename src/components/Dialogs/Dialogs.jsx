import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
};

const MessageItem = (props) => {
    return (
        <div className={s.message}>
            {props.text}
        </div>
    );
};

const Dialogs = (props) => {
  return (
      <div className={s.dialogs}>
          <div className={s.dialogsItem}>
              <DialogItem name="Vitalik" id="1"/>
              <DialogItem name="Nikita" id="2"/>
              <DialogItem name="Igor" id="3"/>
              <DialogItem name="Andrey" id="4"/>
              <DialogItem name="Alex" id="5"/>

          </div>
          <div className={s.messages}>
              <MessageItem text ="Hi"/>
              <MessageItem text ="How is your name"/>
              <MessageItem text ="I live in Ukraine"/>

          </div>

      </div>
  )
};

export default Dialogs