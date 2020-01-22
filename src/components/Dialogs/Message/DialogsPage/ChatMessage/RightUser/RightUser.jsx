import React from "react";
import s from './../ChatMessage.module.css'

class RightUser extends React.Component {
    render() {
        return (
            <li className={s.right}>
                <img
                    src="http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-4.jpg"
                    alt="ava"/>
                <div className={s.chat_item_right}>
                    <div className={s.chat_item_header}>
                        <h5> Igor krasilia</h5>
                        <small className={s.text_muted}>
                            3 days ago
                        </small>
                    </div>
                    <p>{this.props.text}</p>
                </div>
            </li>
        );
    }
}

export default RightUser