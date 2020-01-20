import React from 'react';
import './App.css';
import './css/jquery.scrollbar.css'
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {

    return (
            <div className="content">
                <div className='app-wrapper'>
                    <Header/>
                    <NavBar />
                    <div className='app-wrapper-content'>
                        <Route path='/profile' render={() =><Profile />}/>
                        <Route path='/dialogs' render={() =><Dialogs />}/>
                        <Route path='/users' render={() =><UsersContainer />}/>
                        <Route path='/music' render={() => <Music />}/>
                        <Route path='/settings' render={() => <Settings />}/>
                    </div>
                </div>
            </div>

    );
};


export default App;
