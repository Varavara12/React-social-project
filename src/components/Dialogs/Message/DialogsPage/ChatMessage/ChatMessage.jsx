import React from "react";
import s from './ChatMessage.module.css'
import LeftUser from "./LeftUser/LeftUser";
import RightUser from "./RightUser/RightUser";


const ChatMessage = (props) => {
          
    let messageElementsLeft = props.usersDialogs.leftUser.map(d => <LeftUser key={d.id} text={d.message}/>);
    let messageElementsRight = props.usersDialogs.rightUser.map(m => <RightUser key={m.id} text={m.message}/>);
    return (
        <ul className={s.chat_message}>
            {messageElementsLeft}
            {messageElementsRight}
        </ul>
    );
};


export default ChatMessage