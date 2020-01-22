import React from 'react';
import s from './Users.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons"
import {NavLink} from "react-router-dom";

class UsersFollow extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.usersFollow.map(f => <div key={f.id} className={s.user}>
                        <div className={s.user_dt}>
                            <NavLink to={f.id}><img src={f.src} alt="avatar"/> </NavLink>
                            <NavLink to={f.id}>{f.name} </NavLink>
                        </div>
                        <button className={s.request_btn}>
                            <FontAwesomeIcon icon={faUserPlus}/>
                        </button>
                    </div>)
                }
            </div>
        );
    }

}

export default UsersFollow