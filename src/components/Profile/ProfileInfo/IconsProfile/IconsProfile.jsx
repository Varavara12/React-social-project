import React from 'react';
import s from '../Profileinfo.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faVk, faGithub, faInstagram} from '@fortawesome/fontawesome-free-brands';


const IconsProfile = (props) => {

    return (
        <div className={s.tab}>
            <ul className={s.social_links}>
                <li>
                    <FontAwesomeIcon className={s.icons} icon={faFacebook}/>
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

    );
};

export default IconsProfile;
