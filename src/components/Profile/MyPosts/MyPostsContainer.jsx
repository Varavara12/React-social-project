
import React from 'react';
import {addPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

class  MyPostsContainer extends React.Component {

    render() {
           
        return (
            <MyPosts {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postData,

    }
};



export default connect (mapStateToProps, { addPost} ) (MyPostsContainer);

