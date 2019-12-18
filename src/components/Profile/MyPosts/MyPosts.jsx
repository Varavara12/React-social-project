import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return(
      <div className={s.postBlock}>
          <div>
              <textarea></textarea>
          </div>
          <div>
              <button className={s.btn}>click</button>
          </div>

          <div>
              <h3>New post</h3>
          </div>

          <div className={s.posts}>
              <Post message='Hi, how are you?' like='4'/>
              <Post message='Its my first project React' like='14'/>
              <Post message='I like coding of Webstorm' like='5'/>
              <Post message='I know not' like='19'
                    text='lorem20u  eire o orwy o yuer 334y o weiu oiu yr oi eruywitgq yu eyuwqu3'/>
          </div>
      </div>


  );
};

export default MyPosts;