import React from "react";
import s from './Dialogs.module.css'
import Message from "./Message/Message";
import EventTop from "./EventTop/EventTop";
import DialogItemContainer from "./DialogsItem/DialogsItemContainer";
import {Redirect} from "react-router-dom";

class Dialogs extends React.Component {

    render() {
        if(!this.props.isAuth ) return <Redirect to={"/login"}/>;
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