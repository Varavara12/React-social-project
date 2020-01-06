import React from 'react';
import s from './Navbar.module.css';
import Navlinks from "./Navlinks/Navlinks";
import Followers from "./Followers/Followers";
import Peoples from "./Peoples/Peoples";


const NavBar = (props) => {

    return (
        <div className={s.main}>
           <Followers/>
           <Navlinks/>
           <Peoples state={props.state.users}/>
        </div>
    );
};

export default NavBar