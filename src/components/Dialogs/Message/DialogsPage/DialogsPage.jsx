import React from "react";
import s from './DialogsPage.module.css'
import ChatMessageContainer from "./ChatMessage/ChatMessageContainer";

class DialogsPage extends React.Component {
    render() {
        return (
            <div className={s.messages}>
                <div className={s.scrollbar_wrapper}>
                    <div className={s.tab_content}>
                        <div className={s.tab_pane}>
                            <ChatMessageContainer/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DialogsPage