import React from "react";
import s from './SentMessage.module.css'

class SentMessage extends React.Component {
    sentButton = () => {
        this.props.addMessage();
    };
    onMessageChange = (e) => {
        let text = e.target.value;
        this.props.updateNewMessageText(text);
    };

    render() {
        return (
            <div className={s.sent_message}>
                <div className={s.input_group}>
                    <input onChange={this.onMessageChange} type="text" className={s.form_control}
                           placeholder='Type your message' value={this.props.newMessageText}/>
                    <span className={s.btn}>
                        <button className={s.btn_button} type="button" onClick={this.sentButton}>
                            Send
                        </button>
                    </span>
                </div>
            </div>
        );
    }

}

export default SentMessage