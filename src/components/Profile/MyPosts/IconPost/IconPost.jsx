import React from 'react';
import s from '../MyPosts.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarker, faMusic, faImage, faVideo, faCamera} from "@fortawesome/free-solid-svg-icons"


const IconPost = (props) => {

    return (
        <div className={s.attachments}>
            <ul className={s.iconList}>
                <li>
                    <div className={s.add_loc}>
                        <FontAwesomeIcon className={s.map} icon={faMapMarker}/>
                    </div>
                </li>
                <li>
                    <FontAwesomeIcon className={s.icons} icon={faMusic}/>
                </li>
                <li>
                    <FontAwesomeIcon className={s.icons} icon={faImage}/>
                </li>
                <li>
                    <FontAwesomeIcon className={s.icons} icon={faVideo}/>
                </li>
                <li>
                    <FontAwesomeIcon className={s.icons} icon={faCamera}/>
                </li>
            </ul>
        </div>
    );
};

export default IconPost;