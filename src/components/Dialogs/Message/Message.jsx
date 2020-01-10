import React from "react";
import s from './Message.module.css'
import ChatMessage from "./ChatMessage/ChatMessage";
import SentMessage from "./SentMessages/SentMessage";


const Message = (props) => {

    return (
        <div>
            <div className={s.messages}>
                <div className={s.scrollbar_wrapper}>
                    <div className={s.tab_content}>
                        <div className={s.tab_pane}>
                            <ChatMessage dialogsPage={props.dialogsPage}/>
                        </div>
                    </div>
                </div>
            </div>
            <SentMessage addMessage={props.addMessage} updateNewMessageText={props.updateNewMessageText} newMessageText={props.newMessageText}/>
        </div>
    );
};


export default Message