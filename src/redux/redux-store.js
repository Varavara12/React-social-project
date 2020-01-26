import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer";
import followReducer from "./follow-reducer";
import dialogsUserReducer from "./dialogsUser-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    followPage: followReducer,
    dialogUsersPage: dialogsUserReducer,
    auth: authReducer
});

let store = createStore(reducers);

export default store