import React from 'react';
import s from './Navbar.module.css';
import Navlinks from "./Navlinks/Navlinks";
import Followers from "./Followers/Followers";
import Peoples from "./Peoples/Peoples";


class NavBar extends React.Component {
    render() {
        return (
            <div className={s.main}>
                <Followers/>
                <Navlinks/>
                <Peoples/>
            </div>
        );
    }
}



export default NavBar