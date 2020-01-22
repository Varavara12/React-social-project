import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import EventTop from "./EventTop/EventTop";
import DialogItemContainer from "./DialogsItem/DialogsItemContainer";

class Dialogs extends React.Component {
    render() {
        return (
            <div className={s.dialogs}>
                <EventTop/>
                <div className={s.dialogsItem}>
                    <DialogItemContainer/>
                </div>
                <Message/>
            </div>
        )
    }
}

export default Dialogs