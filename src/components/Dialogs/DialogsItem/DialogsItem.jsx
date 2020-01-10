import React from "react";
import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}><img src={props.src} alt="avatarka"/></NavLink>
            <div className={s.user_pos}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>

        </div>
    );
};

export default DialogItem