import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return(
          <div className={s.item}>
              <img src="https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg" alt=""/>
              {props.message}
              <div>
                  <button>Like</button> {props.like}
              </div>
          </div>
  );
};

export default Post;