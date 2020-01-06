import React from "react";
import s from './Dialogs.module.css'
import DialogItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";
import EventTop from "./EventTop/EventTop";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} src={dialog.src}/>);

    return (
        <div className={s.dialogs}>
            <EventTop/>
            <div className={s.dialogsItem}>
                {dialogsElements}
            </div>

            <Message state={props.state} />



        </div>
    )
};

export default Dialogs