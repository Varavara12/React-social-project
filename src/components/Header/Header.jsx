import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../image/logo.png';
import HeaderNavLinks from "./HeaderNavLinks/HeaderNavLinks";
import HeaderNavIcons from "./HeaderNavIcons/HeaderNavIcons";

class Header extends React.Component {
    render() {
        return (
            <header className={s.header}>
                <nav className={s.navbar}>
                    <NavLink to='#'>
                        <img src={logo} alt="logo"/>
                    </NavLink>
                    <HeaderNavLinks/>
                    <HeaderNavIcons/>
                    <div className={s.loginBlock}>
                        {this.props.isAuth ? <NavLink to={'#'}> {this.props.login} </NavLink>  : <NavLink to={'/login'}>Login</NavLink>  }
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;