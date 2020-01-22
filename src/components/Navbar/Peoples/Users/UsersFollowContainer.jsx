import React from 'react';
import {connect} from "react-redux";
import UsersFollow from "./UsersFollow";

let mapStateToProps = (state) => {
    return {
          usersFollow: state.followPage.usersFollow
    }
};

let UserFollowContainer = connect(mapStateToProps) (UsersFollow);

export default UserFollowContainer