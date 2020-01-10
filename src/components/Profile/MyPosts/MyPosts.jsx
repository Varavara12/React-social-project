import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let postElements = props.postData.map((post) => <Post message={post.post} like={post.likesCount}/>);
    let addPost = () => {
        props.addPost();
    };
    /*обработчик событий*/
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    };

  return(
      <div className={s.postBlock}>
          <div>
              <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
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