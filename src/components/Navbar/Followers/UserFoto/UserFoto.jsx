import React from 'react';
import s from './UserFoto.module.css';



const UserFoto = (props) => {
    return (
        <div className={s.usr_pic}>
            <img src="http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/profile-dp.jpg"
                 alt=""/>
        </div>

    );
};

export default UserFoto