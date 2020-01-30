import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import IconsProfile from "./IconsProfile/IconsProfile";
import ProfileStatus from "./ProfileStatus"

const ProfileInfo = (props) => {

    if(!props.profile ){
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.eventTop}>
                <div className={s.eventTopLeft}><h4>My profile</h4></div>
                <ProfileStatus status ={props.status} updateStatus={props.updateStatus} />
                {/*<div className={s.eventTopRight}><h4>Event Title Here</h4></div>*/}
            </div>
            <div>
                <div className={s.photo}>
                    <div className={s.photo_overlay}></div>
                    <img src="http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/center/post-img-1.jpg"
                         alt=""/>
                </div>
            </div>
            <div className={s.user_img}>
                <img src={props.profile.photos.large} alt=""/>
                <div className={s.user_tab}>
                    <div>
                        <h3>{props.profile.fullName}</h3>
                        <div className={s.aboutMe}>
                            <span className={s.descp}>{props.profile.aboutMe}</span>
                        </div>
                        <IconsProfile/>
                    </div>

                    <div className={s.looking}>
                          <h3> I'm looking for a job?{props.profile.lookingForAJob ? <p>YES</p> : <p>NO</p>}</h3>
                        <div className={s.aboutMe}>
                            <span className={s.descp}>{props.profile.lookingForAJobDescription}</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default ProfileInfo;
