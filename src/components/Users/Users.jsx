import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope,} from "@fortawesome/free-solid-svg-icons"
import userPfoto from "./../../image/users.png"
import {userAPI} from "../../api/api";


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
                                        {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                           props.unfollow(u.id)
                                        }}> Unsubscribe </button> : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.follow(u.id)
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