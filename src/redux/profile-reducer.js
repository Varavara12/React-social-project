const  ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    postData: [
        {id: 1, post: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam luctus hendrerit metus, ut ullamcorper quam finibus at. Etiam id magna sit amet...', likesCount: 34, views: 65},
        {id: 2, post: 'Its my first project React', likesCount: 20, views: 47},
        {id: 3, post: 'I like coding of Webstorm', likesCount: 18, views: 34}
    ],
    newPostText: '65767',
    profile: null
};

const profileReducer = (state = initialState, action) =>{
    
    switch (action.type) {
        case  ADD_POST:
            let text = state.newPostText;
            return {
                
                newPostText: '',
                postData: [...state.postData, {id: 4, post: text, likesCount: 0, views: 0}]
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
            case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        default:
            return state
    }
    
};

export const addPost = () =>({type: ADD_POST});
export const setUserProfile = (profile) =>({type: SET_USER_PROFILE, profile});
export const updateNewPostText = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;