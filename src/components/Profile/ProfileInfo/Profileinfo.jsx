import React from 'react';
import s from './Profileinfo.module.css';


const Profileinfo = () => {
    return (
        <div>
            <div className={s.image}>
                <img src="https://99px.ru/sstorage/53/2014/01/tmb_93387_7702.jpg" alt=""/>
            </div>

            <div className={s.description}>
                ava+description
            </div>
        </div>

    );
};

export default Profileinfo;
