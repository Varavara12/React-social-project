// eslint-disable-next-line no-unused-vars
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


/*const MyPostsContainer = (props) => {
    let state =props.store.getState();

    let onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    /!*обработчик событий*!/
    let onPostChange = (text) =>{
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action)
    };

  return(
      <MyPosts addPost={onAddPost} updateNewPostText={onPostChange} newPostText={state.profilePage.newPostText} postData={state.profilePage.postData}/>
  );
};*/

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postData
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
         updateNewPostText: (text) => {
             let action = updateNewPostTextActionCreator(text);
            dispatch(action)
         },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps ) (MyPosts);

export default MyPostsContainer;