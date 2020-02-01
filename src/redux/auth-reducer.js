import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
    
};

const authReducer = (state = initialState, action) =>{

    switch (action.type) {
        case SET_USER_DATA:
            return  {
                ...state,
                ...action.payload
            };

        default:
            return state
    }
    
};



export const setAuthUserData = (userId, email, login, isAuth ) =>({type: SET_USER_DATA, payload: {userId, email, login, isAuth} });

export const getAuthUserData = () => {
    return (dispatch) => {
       return  authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login, true)) // если resultCode === 0 то диспатчим данные в редьюсер
                }
            });

    };
};

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData()) // если resultCode === 0 то диспатчим данные в редьюсер
                } else {
                    let message = response.data.messages.length > 0 ?  response.data.messages[0] : "Some error";
                    dispatch(stopSubmit("login", {_error: message}))
                }
            });
    };
};

export const logout = () => {
    return (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false)) // если resultCode === 0 то диспатчим данные в редьюсер
                }
            });
    };
};

export default authReducer;