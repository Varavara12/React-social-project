import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/Profileinfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
    return (
        <div>
            <div className={s.post}>
                <ProfileInfo savePhoto={props.savePhoto} isOwner={props.isOwner} profile={props.profile} updateStatus={props.updateStatus} status={props.status}/>
            </div>
            <MyPostsContainer />
        </div>


    );
};

export default Profile;