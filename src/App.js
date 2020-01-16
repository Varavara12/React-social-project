import React from 'react';
import './App.css';
import './css/jquery.scrollbar.css'
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {

    return (
            <div className="content">
                <div className='app-wrapper'>
                    <Header/>
                    <NavBar />
                    <div className='app-wrapper-content'>
                        <Route path='/profile' render={() =><Profile />}/>
                        <Route path='/dialogs' render={() =><DialogsContainer />}/>
                        <Route path='/news' render={() =><News />}/>
                        <Route path='/music' render={() => <Music />}/>
                        <Route path='/settings' render={() => <Settings />}/>
                    </div>
                </div>
            </div>

    );
};


export default App;
