import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div className={s.post}>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>

    );
};

export default Profile;