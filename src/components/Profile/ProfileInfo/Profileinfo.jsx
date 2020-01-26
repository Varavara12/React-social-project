import React from 'react';
import s from './Profileinfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faVk, faGithub, faInstagram} from '@fortawesome/fontawesome-free-brands';


const ProfileInfo = (props) => {
    
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={s.profileInfo}>
            <div className={s.eventTop}>
                <div className={s.eventTopLeft}><h4>My profile</h4></div>
                <div className={s.eventTopRight}><h4>Event Title Here</h4></div>
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
                        <div className={s.tab}>
                            <ul className={s.social_links}>
                                <li>
                                        <FontAwesomeIcon  className={s.icons} icon={faFacebook}/>
                                </li>
                                <li>
                                    <FontAwesomeIcon className={s.icons} icon={faTwitter}/>
                                </li>
                                <li>
                                    <FontAwesomeIcon className={s.icons} icon={faGithub}/>
                                </li>
                                <li>
                                    <FontAwesomeIcon className={s.icons} icon={faVk}/>
                                </li>
                                <li>
                                     <FontAwesomeIcon className={s.icons} icon={faInstagram}/>
                                </li>
                            </ul>
                        </div>
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
