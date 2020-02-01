import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import IconPost from "./IconPost/IconPost";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requireField} from "../../utils/validators/validators";
import {Input} from "../../common/FormsControls/FormsControls";

const MyPosts = (props) => {

   let addPostMessage = (values) => {
          props.addPost(values.newPostText);  /*name={"newMessageText"} применяем интификатор*/
      };
   let postElements = props.postData.map(d => <Post key={d.id} post={d.post} likesCount={d.likesCount} views={d.views}/>)
    return (
        <div className={s.postBlock}>
            <div className={s.postbox}>
                <span className={s.create_post}>Create post</span>
                <div className={s.new_postbox}>
                    <figure>
                        <img src="http://gambolthemes.net/workwise-new/images/resources/us-pic.png" alt="logo"/>
                    </figure>
                </div>
                <AddPostFormRedux onSubmit={addPostMessage}/>
            </div>
            {postElements}
        </div>
  );
};

const maxLength10 = maxLengthCreator(10);

const AddPostForm = (props) => {
      return (
          <form onSubmit={props.handleSubmit}>  {/*handleSubmit доверяем обработку событий*/}
                <div className={s.newpst_input}>
                    <Field placeholder={"Type your message"} name={"newPostText"} component={Input} validate={[requireField, maxLength10]} />
                </div>
                <IconPost/>
                <div>
                    <button className={s.post_btn} >Post</button>
                </div>
          </form>
      )
};

const AddPostFormRedux = reduxForm ({form: "AddNewPostForm"}) (AddPostForm);

export default MyPosts;