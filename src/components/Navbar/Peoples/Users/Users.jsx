import React from 'react';
import s from './Users.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons"
import {NavLink} from "react-router-dom";

const Users = (props) => {

    let path = "/#/" + props.id;
    return (
        <div className={s.user}>
            <div className={s.user_dt}>
                <NavLink to={path}><img src={props.src} alt="avatar"/> </NavLink>
                <NavLink  to={path}>{props.name}  </NavLink>
            </div>
            <button className={s.request_btn}>
                <FontAwesomeIcon icon={faUserPlus}/>
            </button>
        </div>
    );
};

export default Users