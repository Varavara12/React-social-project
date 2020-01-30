import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsFoRedirect = (state) => ({
        isAuth: state.auth.isAuth
    });

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>;
            return <Component{...this.props}/> /*перекидываем пропсы дальше с помошью спрет ...props*/
        }
    }


    return connect(mapStateToPropsFoRedirect)(RedirectComponent)
};


