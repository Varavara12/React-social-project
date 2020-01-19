import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import EventTop from "./EventTop/EventTop";


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map((dialog) => <DialogItem key={dialog.id} name={dialog.name} id={dialog.id} src={dialog.src}/>);
    return (
        <div className={s.dialogs}>
            <EventTop/>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>
            <Message />
        </div>
    )
};

export default Dialogs