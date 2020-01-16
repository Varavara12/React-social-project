import React from "react";
import SentMessageContainer from "./SentMessages/SentMessageContainer";
import DialogsPage from "./DialogsPage/DialogsPage";


const Message = (props) => {

    return (
        <div>
            <DialogsPage />
            <SentMessageContainer />
        </div>
    );
};


export default Message