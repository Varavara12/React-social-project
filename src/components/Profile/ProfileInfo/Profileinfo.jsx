import React from 'react';
import s from './Profileinfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={s.eventTop}>
                <div className={s.eventTopLeft}><h4>My posts</h4></div>
                <div className={s.eventTopRight}><h4>Event Title Here</h4></div>
            </div>
            <div>
                <div className={s.photo}>
                    <div className={s.photo_overlay}></div>
                    <img src="http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/center/post-img-1.jpg"
                         alt=""/>
                </div>
            </div>
        </div>

    );
};

export default ProfileInfo;
