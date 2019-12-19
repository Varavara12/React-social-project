import React from 'react';
import s from './Navbar.module.css';
import Navlinks from "./Navlinks/Navlinks";
import Followers from "./Followers/Followers";


const NavBar = () => {
    return (
        <div className={s.main}>
           <Followers/>
           <Navlinks/>
        </div>
    );
};

export default NavBar