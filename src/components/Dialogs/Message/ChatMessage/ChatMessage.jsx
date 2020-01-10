import React from "react";
import s from './ChatMessage.module.css'
import LeftUser from "./LeftUser/LeftUser";
import RightUser from "./RightUser/RightUser";


const ChatMessage = (props) => {

    let messageElementsLeft = props.dialogsPage.leftUser.map(message => <LeftUser text={message.message}/>);
    let messageElementsRight = props.dialogsPage.rightUser.map(message => <RightUser text={message.message}/>);
    return (
        <ul className={s.chat_message}>
            {messageElementsLeft}
            {messageElementsRight}
        </ul>
    );
};


export default ChatMessage