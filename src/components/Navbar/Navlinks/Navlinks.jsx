import React from 'react';
import s from './Navlinks.module.css';
import {NavLink} from "react-router-dom";

const Navlinks = () => {
    return (
        <nav className={s.nav}>
            <div className={s.categories}>
                <h3>Categories</h3>
            </div>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
        </nav>
    );
};

export default Navlinks