import * as serviceWorker from './serviceWorker';
import state, {subscribe} from './redux/state'
import './js/jquery.scrollbar'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, updateNewMessageText, updateNewPostText} from './redux/state'


 let renderedEntireTree = (state) => {
    ReactDOM.render(<App state={state} addPost={addPost}
                         updateNewPostText={updateNewPostText}
                         addMessage={addMessage}
                         updateNewMessageText={updateNewMessageText}

    />, document.getElementById('root'));
};

renderedEntireTree(state);

subscribe(renderedEntireTree);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


