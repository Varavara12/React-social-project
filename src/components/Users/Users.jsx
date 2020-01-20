import React from "react";
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope,} from "@fortawesome/free-solid-svg-icons"
const Users = (props) => {
      if(props.users.length === 0){
          props.setUsers([
        {id: 1, photoUrl: 'https://html.crumina.net/html-olympus/img/author-main1.jpg', followed: false, fullName: 'Vitalii Kropotkin', status: 'I am a boss', location: {city: 'Kharkov', country: 'Ukraine'} },
        {id: 2, photoUrl: 'http://gambolthemes.net/workwise-new/images/resources/pf-icon1.png', followed: true, fullName: 'Nikita Voskov', status: 'I am a boss too', location: {city: 'Szczecin', country: 'Poland'} },
        {id: 3, photoUrl: 'http://gambolthemes.net/workwise-new/images/resources/pf-icon6.png', followed: false, fullName: 'Igor Krasilia', status: 'I am a boss yes', location: {city: 'Kharkov', country: 'Ukraine'} },
        {id: 3, photoUrl: 'http://gambolthemes.net/workwise-new/images/resources/pf-icon6.png', followed: false, fullName: 'Igor Krasilia', status: 'I am a boss yes', location: {city: 'Kharkov', country: 'Ukraine'} },

    ])
      }

    return (
        <div className={s.notifications_list}>
            <h3 className={s.h3}>People</h3>
            <div className={s.users}>
                {
                    props.users.map(u => <div className={s.user_list} key={u.id}>
                        <div className={s.img}>
                            <img src={u.photoUrl} alt="avatarka"/>
                        </div>
                        <div className={s.info}>
                            <h3>
                                <NavLink to='#'>
                                    {u.fullName}
                                </NavLink>
                                {u.status}
                            </h3>
                            <ul className={s.follow_list}>
                                <li>
                                    {u.followed ? <button onClick={() =>{props.unfollow(u.id)}}> Unsubscribe </button> : <button onClick={() =>{props.follow(u.id)}}> Subscribe </button> }
                                </li>
                                <li>
                                    <NavLink to='#' > <FontAwesomeIcon className={s.font} icon={faEnvelope} />  </NavLink>
                                </li>
                                <li>
                                    <NavLink to='#'>Hire </NavLink>
                                </li>
                            </ul>
                        </div>
                        {/*  <span>
                        <div>
                            <img className={s.photo} src={u.photoUrl} alt=""/>
                        </div>
                        <div>
                            {u.followed ? <button onClick={() =>{props.unfollow(u.id)}}>unfollow</button> : <button onClick={() =>{props.follow(u.id)}}>follow</button> }

                        </div>
                    </span>
                  <span>
                      <span>
                          <div>{u.fullName}</div>
                          <div>{u.status}</div>
                      </span>
                      <span>
                          <div>{u.location.country}</div>
                          <div>{u.location.city}</div>
                      </span>
                  </span>*/}

                    </div>)
                }
            </div>
        </div>
    )
};

export default Users