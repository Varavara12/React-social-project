import React from 'react';
import s from './UserName.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGlobe} from "@fortawesome/free-solid-svg-icons"


const UserName = (Props) => {
    return (
        <div className={s.user_main}>
            <h4>Kropotkin Vitalii</h4>
            <span>
                <FontAwesomeIcon className={s.font} icon={faGlobe}/>
                Ukraine
            </span>
        </div>

    );
};

export default UserName