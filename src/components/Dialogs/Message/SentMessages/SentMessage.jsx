import React from "react";
import s from './SentMessage.module.css'

const SentMessage = (props) => {

    let newMessage = React.createRef();

    let sentButton = () =>{
      props.addMessage();
    };

    let onMessageChange = () =>{
        let text = newMessage.current.value;
        props.updateNewMessageText(text)
    };
    return (
        <div className={s.sent_message}>
            <div className={s.input_group}>
                <input onChange={onMessageChange} ref={newMessage} type="text" className={s.form_control} placeholder='Type your message' value={props.newMessageText}/>
                <span className={s.btn}>
                        <button className={s.btn_button} type="button" onClick={sentButton}>
                            Send
                        </button>
                    </span>
            </div>
        </div>
    );
};


export default SentMessage