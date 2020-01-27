import React from 'react';
import s from '../Header.module.css';
import {NavLink} from "react-router-dom";

class HeaderNavLinks extends React.Component {
    render() {
        return (
            <div className={s.navbar_collapse}>
                <ul className={s.navbar_expand}>
                    <li className={s.nav_item}>
                        <NavLink activeClassName={s.active} to='#'>Home</NavLink>
                    </li>
                    <li className={s.nav_item}>
                        <NavLink activeClassName={s.active} to='#'>Discussion</NavLink>
                    </li>
                    <li className={s.nav_item}>
                        <NavLink activeClassName={s.active} to='#'>Weather</NavLink>
                    </li>
                    <li className={s.nav_item}>
                        <NavLink activeClassName={s.active} to='#'>Pages</NavLink>
                    </li>
                    <li className={s.nav_item}>
                        <NavLink activeClassName={s.active} to='#'>Blog</NavLink>
                    </li>
                    <NavLink className={s.add_event} to='#'>Add New Event</NavLink>
                </ul>
            </div>
        );
    }
}

export default HeaderNavLinks;