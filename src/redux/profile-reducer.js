import {profileAPI, userAPI} from "../api/api";

const  ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postData: [
        {id: 1, post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...', likesCount: 34, views: 65},
        {id: 2, post: 'Its my first project React', likesCount: 20, views: 47},
        {id: 3, post: 'I like coding of Webstorm', likesCount: 18, views: 34}
    ],
    profile: null,
    status: ""
};

const profileReducer = (state = initialState, action) =>{
    
    switch (action.type) {
        case  ADD_POST:
            let text = action.newPostText;
            return {
                ...state,
                postData: [...state.postData, {id: 4, post: text, likesCount: 0, views: 0}]
            };

            case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
            case SET_STATUS:
            return {
                ...state,      /*Здесть придет новый статус в экшенах и засетаем в status*/
                status: action.status
            };
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,      /*Сделать копию Profile что былБ а раздел photos пометь на то что пришло в экшене*/
                profile: {...state.profile, photos: action.photos}
            };

        default:
            return state
    }
    
};

export const addPost = (newPostText) =>({type: ADD_POST, newPostText});
export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status });
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos });

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await userAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));

};

export const getStatus = (userId) => async (dispatch) => {     /*пулучить статус от пользователя*/
    let response = await profileAPI.getStatus(userId)             /*отправить запрос на сервак*/
    dispatch(setStatus(response.data));   /* То что придет задиспатчить*/
};

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    /*Анализируем resultCode если равно 0 то обрабатываем код / resultCode приходит с запросом в обьекте */
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));   /* То что придет задиспатчить*/
    }
};

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    /*Анализируем resultCode если равно 0 то обрабатываем код / resultCode приходит с запросом в обьекте */
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos));   /* То что придет задиспатчить*/
    }
};

export default profileReducer;