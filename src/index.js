import * as serviceWorker from './serviceWorker';
import state from './redux/state'
import './js/jquery.scrollbar'
import $ from 'jquery'
import {renderedEntireTree} from "./render";



$(document).ready(function () {
    $('.Message_scrollbar_wrapper__1KVyt').scrollbar();
});

renderedEntireTree(state);




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


