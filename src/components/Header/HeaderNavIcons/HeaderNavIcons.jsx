import React from 'react';
import s from '../Header.module.css';
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUserPlus, faEnvelope, faBell} from "@fortawesome/free-solid-svg-icons"


class HeaderNavIcons extends React.Component {
    render() {
        return (
            <ul className={s.group_icons}>
                <li>
                    <NavLink to='#'>
                        <FontAwesomeIcon icon={faSearch}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='#'>
                        <FontAwesomeIcon icon={faUserPlus}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='#'>
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='#'>
                        <FontAwesomeIcon icon={faBell}/>
                    </NavLink>
                </li>
            </ul>
        );
    }
}

export default HeaderNavIcons;