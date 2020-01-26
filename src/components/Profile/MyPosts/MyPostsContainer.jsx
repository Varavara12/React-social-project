
import React from 'react';
import {addPost, updateNewPostText} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

class  MyPostsContainer extends React.Component {
     

    render() {

        return (
            <MyPosts {...this.props} profile={this.props.profile}

            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postData,
        profile: state.profilePage.profile

    }
};



export default connect (mapStateToProps, {updateNewPostText, addPost} ) (MyPostsContainer);

