import React from 'react';
import s from './Navbar.module.css';
import Navlinks from "./Navlinks/Navlinks";
import Followers from "./Followers/Followers";
import PeoplesContainer from "./Peoples/PeoplesContainer";


const NavBar = (props) => {

    return (
        <div className={s.main}>
           <Followers/>
           <Navlinks/>
           <PeoplesContainer />
        </div>
    );
};

export default NavBar