import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope,} from "@fortawesome/free-solid-svg-icons"
import * as axios from "axios";
import userPfoto from "./../../image/users.png"


class Users extends React.Component {
    constructor(props) {
        super(props);
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
                this.props.setUsers(response.data.items)
            });

    }

    render() {
        return (
            <div className={s.notifications_list}>
                <h3 className={s.h3}>People</h3>
                <div className={s.users}>
                    {
                        this.props.users.map(u => <div className={s.user_list} key={u.id}>
                            <div className={s.img}>
                                <img src={u.photos.small != null ? u.photos.small : userPfoto} alt="avatarka"/>
                            </div>
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
                                            this.props.unfollow(u.id)
                                        }}> Unsubscribe </button> : <button onClick={() => {
                                            this.props.follow(u.id)
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
                <button onClick={this.getUsers}>More</button>
            </div>
        )
    }
}

export default Users