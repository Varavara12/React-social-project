import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope,} from "@fortawesome/free-solid-svg-icons"
import userPfoto from "./../../image/users.png"



const User = ({users, followingInProgress, unfollow, follow}) => {
    return (

        <div className={s.user_list}>
            <NavLink to={'/profile/' + users.id}>
                <div className={s.img}>
                    <img src={users.photos.small != null ? users.photos.small : userPfoto} alt="avatarka"/>
                </div>
            </NavLink>
            <div className={s.info}>
                <h3>
                    <NavLink to='#'>
                        {users.name}
                    </NavLink>
                    {users.status}
                </h3>
                <ul className={s.follow_list}>
                    <li>
                        {users.followed ?
                            <button disabled={followingInProgress.some(id => id === users.id)} onClick={() => {
                                unfollow(users.id)
                            }}> Unsubscribe </button> :
                            <button disabled={followingInProgress.some(id => id === users.id)} onClick={() => {
                                follow(users.id)
                            }}> Subscribe </button>}
                    </li>
                    <li>
                        <NavLink to='#'> <FontAwesomeIcon className={s.font} icon={faEnvelope}/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='#'>Hire </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )


};

export default User