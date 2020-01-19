const  ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    postData: [
        {id: 1, post: 'Hi', likesCount: 34},
        {id: 2, post: 'Its my first project React', likesCount: 20},
        {id: 3, post: 'I like coding of Webstorm', likesCount: 18}
    ],
    newPostText: '65767'
};

const profileReducer = (state = initialState, action) =>{
    
    switch (action.type) {
        case  ADD_POST:
            let text = state.newPostText;
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {id: 4, post: text, likesCount: 0}]
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };

        default:
            return state
    }
    
};

export const addPostActionCreator = () =>({type: 'ADD-POST'});
export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text });

export default profileReducer;