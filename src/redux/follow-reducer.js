const SET_FOLLOW_USERS = 'SET-FOLLOW-USERS';

let initialState = {
    usersFollow: [
                {id: "user_1", name: 'Vitalii Kropotkin', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
                {id: "user_2", name: 'Nikita Voskov', src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-3.jpg'},
                {id: "user_3", name: 'Igor Krasilia', src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-4.jpg'},
                {id: "user_4", name: 'Andrey Belych', src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/event-view/user-5.jpg'},
                {id: "user_5", name: 'Alexa Gold', src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-2.jpg'}
            ]
 };

const followReducer = (state = initialState, action) =>{
switch (action.type) {

        case SET_FOLLOW_USERS: {
            return {...state, usersFollow: [...state.usersFollow, ...action.usersFollow]}
        }

        default:
            return state
    }
};

export const setFollowUsersAC = (usersFollow) => ({type: SET_FOLLOW_USERS, usersFollow });

export default  followReducer;