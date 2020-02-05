import React, {Component, Suspense} from 'react';
import './App.css';
import './css/jquery.scrollbar.css'
import NavBar from "./components/Navbar/Navbar";
import {Redirect, Route, withRouter} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Info from "./components/Info/Info";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
const  DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const  ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

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
                            <Route path='/' render={() => <Redirect to={'/profile'}/>}/>
                            <Route path='/profile/:userId?' render={() => {
                               return <Suspense fallback={<div>Loading...</div>}>
                                    <ProfileContainer/>
                               </Suspense>
                            }}/>
                            <Route path='/dialogs' render={() => {
                               return <Suspense fallback={<div>Loading...</div>}>
                                    <DialogsContainer/>
                                </Suspense>
                            }}/>
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
