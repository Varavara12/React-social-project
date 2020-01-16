import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = () => {

    return (
        <div className={s.post}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>

    );
};

export default Profile;