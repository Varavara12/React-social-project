import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import IconsProfile from "./IconsProfile/IconsProfile";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../image/users.png"

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {        /*отправка фото*/
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };
    return (
        <div className={s.profileInfo}>
            <div className={s.eventTop}>
                <div className={s.eventTopLeft}><h4>My profile</h4></div>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
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
                <div>
                    <img src={props.profile.photos.large || userPhoto} alt="photos"/>
                    {props.isOwner &&
                    <input className={s.input_upload} type="file" id={"upload"} onChange={onMainPhotoSelected}/>
                    }
                    <label className={s.label} htmlFor="upload" >Upload photo</label>
                </div>

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
