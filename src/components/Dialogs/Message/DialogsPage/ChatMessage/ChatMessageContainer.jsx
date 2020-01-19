import React from "react";
import ChatMessage from "./ChatMessage";
import {connect} from "react-redux";


/*const ChatMessageContainer = (props) => {
     let state = props.store.getState();
    return (
        <ChatMessage dialogsPage={state.dialogsPage.usersDialogs}/>
    );
};*/

let mapStateToProps = (state) => {
    return {
        usersDialogs: state.dialogsPage.usersDialogs
    }
};
const ChatMessageContainer = connect(mapStateToProps) (ChatMessage);


export default ChatMessageContainer