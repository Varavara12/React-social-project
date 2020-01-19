import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";



const MyPosts = (props) => {

    let postElements = props.postData.map((post) => <Post message={post.post} key={post.id} like={post.likesCount}/>);
    
    let addPost = () => {
        props.addPost();
    };
    /*обработчик событий*/
    let onPostChange = (e) =>{
        let text = e.target.value;
        props.updateNewPostText(text);

    };

  return(
      <div className={s.postBlock}>
          <div>
              <textarea onChange={onPostChange}  value={props.newPostText} />
          </div>
          <div>
              <button className={s.btn} onClick={addPost}>click</button>
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