import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import { withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId
            if(!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);// Функция Thunk
        this.props.getStatus(userId)
    }


    render() {
        return (                          /*status к нам пришел из mapStateToProps и прокидываем дальше в props*/
           <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth : state.auth.isAuth
});

/*      как было раньше потом приминили функцию compose() ()
let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
connect (mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);*/

export default compose(
    connect (mapStateToProps, {getUserProfile, getStatus, updateStatus}),  //3
    withRouter,  // 2

) (ProfileContainer);

// withAuthRedirect // 1/* (Испльзовали HOC)*/