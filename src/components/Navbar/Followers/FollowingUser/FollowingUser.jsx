import React from 'react';
import s from './FollowingUser.module.css';

const FollowingUser = (props) => {
    return (
        <ul className={s.followers}>
            <li>
                <div className={s.follower_user}>
                    <h4>Followers</h4>
                    <span>155</span>
                </div>
            </li>
            <li>
                <div className={s.follower_user}>
                    <h4>Following</h4>
                    <span>320</span>
                </div>
            </li>
        </ul>

    );
};

export default FollowingUser