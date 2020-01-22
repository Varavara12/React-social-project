import React from "react";
import s from './ChatMessage.module.css'
import LeftUser from "./LeftUser/LeftUser";
import RightUser from "./RightUser/RightUser";

class ChatMessage extends React.Component {
    render() {
        let messageElementsLeft = this.props.usersDialogs.leftUser.map(d => <LeftUser key={d.id} text={d.message}/>);
        let messageElementsRight = this.props.usersDialogs.rightUser.map(m => <RightUser key={m.id} text={m.message}/>);
        return (
            <ul className={s.chat_message}>
                {messageElementsLeft}
                {messageElementsRight}
            </ul>
        );
    }
}


export default ChatMessage