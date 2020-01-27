import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope,} from "@fortawesome/free-solid-svg-icons"
import userPfoto from "./../../image/users.png"
import * as axios from "axios";

const Users = (props) => {

     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize) ;
        let pages = [];
        for(let i = 1; i <= pagesCount; i++){
            pages.push(i)
        }
    return (
            <div className={s.notifications_list}>
                <h3 className={s.h3}>People</h3>
                <div className={s.users}>
                    <div>
                        {pages.map(p => {
                            return <span key={p} onClick={(e) => {props.onPageChanged(p)}} className={props.currentPage === p && s.seledtedPage}>{p}</span>
                        })}
                    </div>
                    {
                        props.users.map(u => <div className={s.user_list} key={u.id}>
                            <NavLink to={'/profile/' + u.id}>
                                <div className={s.img}>
                                    <img src={u.photos.small != null ? u.photos.small : userPfoto} alt="avatarka"/>
                                </div>
                            </NavLink>
                            <div className={s.info}>
                                <h3>
                                    <NavLink to='#'>
                                        {u.name}
                                    </NavLink>
                                    {u.status}
                                </h3>
                                <ul className={s.follow_list}>
                                    <li>
                                        {u.followed ? <button onClick={() => {

                                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY" : "817d25a7-0864-435b-8feb-23971ce675d8"
                                                }
                                            })
                                                .then(response => {
                                                    if(response.data.resultCode === 0) {
                                                        props.unfollow(u.id)
                                                    }
                                                });

                                        }}> Unsubscribe </button> : <button onClick={() => {

                                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY" : "817d25a7-0864-435b-8feb-23971ce675d8"
                                                }
                                            })
                                                .then(response => {
                                                    if(response.data.resultCode === 0) {
                                                        props.follow(u.id)
                                                    }
                                                });
                                            
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
                        </div>)
                    }
                </div>

            </div>
        )
};

export default Users