import React from 'react';
import './App.css';
import './css/jquery.scrollbar.css'
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="content">
                <div className='app-wrapper'>
                    <Header/>
                    <NavBar state={props.state.UserPage}/>
                    <div className='app-wrapper-content'>
                        <Route path='/profile' render={() =><Profile profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />}/>
                        <Route path='/dialogs' render={() =><Dialogs
                            dialogsPage={props.state.dialogsPage}
                            addMessage={props.addMessage}
                            updateNewMessageText={props.updateNewMessageText}
                        />}/>
                        <Route path='/news' render={() =><News />}/>
                        <Route path='/music' render={() => <Music />}/>
                        <Route path='/settings' render={() => <Settings />}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;
