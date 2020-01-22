import React from "react";
import SentMessageContainer from "./SentMessages/SentMessageContainer";
import DialogsPage from "./DialogsPage/DialogsPage";


class Message extends React.Component {
    render() {
        return (
            <div>
                <DialogsPage/>
                <SentMessageContainer/>
            </div>
        );
    }
}


export default Message