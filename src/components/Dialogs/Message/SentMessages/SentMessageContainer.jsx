
import React from "react";
import {addMessageActionCreator } from "../../../../redux/dialogs-reducer";
import SentMessage from "./SentMessage";
import {connect} from "react-redux";


/*const SentMessageContainer = (props) => {
          
    let state = props.store.getState();
    let sentButton = () =>{
      props.store.dispatch(addMessageActionCreator());
    };

    let onMessageChange = (text) =>{
        let action = updateNewMessageTextActionCreator(text);
        props.store.dispatch(action)
    };
    return (
        <SentMessage updateNewMessageText={onMessageChange} addMessage={sentButton} newMessageText={state.dialogsPage.newMessageText} />
    );
};*/

let mapStateToProps = (state) => {
    return {
          newMessageText: state.dialogsPage.newMessageText
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageText) => {
            dispatch(addMessageActionCreator(newMessageText));
        }
    }
};

let SentMessageContainer = connect (mapStateToProps, mapDispatchToProps) (SentMessage);

export default SentMessageContainer