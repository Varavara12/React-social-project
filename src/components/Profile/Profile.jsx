import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return(  <div >
              <div>
                  <img src="https://99px.ru/sstorage/53/2014/01/tmb_93387_7702.jpg" alt=""/>
              </div>

              <div>
                  ava+description
              </div>
              <MyPosts/>
          </div>

  );
};

export default Profile;