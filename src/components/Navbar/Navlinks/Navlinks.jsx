import React from 'react';
import s from './Navlinks.module.css';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser, faComments, faNewspaper, faMusic, faCog} from "@fortawesome/free-solid-svg-icons"

const Navlinks = () => {
    return (
        <nav className={s.nav}>
            <div className={s.categories}>
                <h3>Categories</h3>
            </div>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.active}> <FontAwesomeIcon className={s.font} icon={faUser}/>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}><FontAwesomeIcon className={s.font} icon={faComments}/> Messages</NavLink></div>
            <div className={s.item}><NavLink to="/users" activeClassName={s.active}> <FontAwesomeIcon className={s.font} icon={faNewspaper}/>Users</NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.active}><FontAwesomeIcon className={s.font} icon={faMusic}/>Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" activeClassName={s.active}><FontAwesomeIcon className={s.font} icon={faCog}/>Settings</NavLink></div>
        </nav>
    );
};

export default Navlinks