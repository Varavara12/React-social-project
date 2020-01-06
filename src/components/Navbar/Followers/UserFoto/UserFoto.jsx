import React from 'react';
import s from './UserFoto.module.css';



const UserFoto = (props) => {
    return (
        <div className={s.usr_pic}>
            <img src="https://html.crumina.net/html-olympus/img/author-main1.jpg"
                 alt=""/>
        </div>

    );
};

export default UserFoto