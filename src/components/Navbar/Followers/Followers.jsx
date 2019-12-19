import React from 'react';
import s from './Followers.module.css';
import FollowerLogo from "./FollowerLogo/FollowerLogo";
import UserFoto from "./UserFoto/UserFoto";
import UserName from "./UserName/UserName";
import FollowingUser from "./FollowingUser/FollowingUser";


const Followers = (props) => {
    return (
       <div className={s.container}>
                <FollowerLogo/>
                <UserFoto/>
                <UserName/>
                <FollowingUser/>
            </div>
    );
};

export default Followers