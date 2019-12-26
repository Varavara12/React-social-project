import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElements = props.postData.map((post) => <Post message={post.post} like={post.likesCount}/>);


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
              {postElements}
          </div>
      </div>


  );
};

export default MyPosts;