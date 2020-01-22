import React from "react";
import s from './../ChatMessage.module.css'

class LeftUser extends React.Component {
    render() {
        return (
            <li className={s.left}>
                <img src="https://html.crumina.net/html-olympus/img/author-main1.jpg" alt="ava"/>
                <div className={s.chat_item}>
                    <div className={s.chat_item_header}>
                        <h5> Kropotkin Vitalii</h5>
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

export default LeftUser