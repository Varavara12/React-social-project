import React, {Component} from 'react';
import './App.css';
import './css/jquery.scrollbar.css'
import NavBar from "./components/Navbar/Navbar";
import {Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Info from "./components/Info/Info";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";


class App extends Component {
     componentDidMount() {
       this.props.initializeApp()
    }

    render() {
         if(!this.props.initialized) {
             return <Preloader/>
         }
        return (
            <div className="content">
                <div>
                    <HeaderContainer/>
                    <div className='app-wrapper'>
                        <NavBar/>
                        <div className='app-wrapper-content'>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                        </div>
                        <Info/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
      initialized: state.app.initialized
});

export default compose(
    withRouter,
    connect (mapStateToProps, {initializeApp})
) (App);
