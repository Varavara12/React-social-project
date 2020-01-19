    const ADD_MESSAGE = 'ADD-MESSAGE';
    const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

    let initialState = {
        dialogs: [
            {id: 1, name: 'Vitalik', src: 'https://html.crumina.net/html-olympus/img/author-main1.jpg'},
            {
                id: 2,
                name: 'Nikita',
                src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-3.jpg'
            },
            {
                id: 3,
                name: 'Igor',
                src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-4.jpg'
            },
            {
                id: 4,
                name: 'Andrey',
                src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/event-view/user-5.jpg'
            },
            {
                id: 5,
                name: 'Alexa',
                src: 'http://gambolthemes.net/html-items/d-goeveni/dark/images/homepage/left-side/left-img-2.jpg'
            }
        ],

        usersDialogs: {
            leftUser: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your name'},
                {id: 3, message: 'I live in Ukraine'},
                {id: 4, message: 'Yo'},
                {id: 5, message: 'Yo'},

            ],
            rightUser: [
                {id: 1, message: 'Hi434'},
                {id: 2, message: 'How is yo34343ur name'},
                {id: 3, message: 'I live in Uk4343434raine'},
                {id: 4, message: 'Yo343434343'},
                {id: 5, message: 'Yo3434'}
            ]
        }
        ,
        newMessageText: '3434'
    };

    const dialogsReducer = (state = initialState, action) => {

        let stateCopy = {
            ...state,
            usersDialogs: {...state.usersDialogs},
            rightUser: [...state.usersDialogs.rightUser]
        };
        switch (action.type) {
            case UPDATE_NEW_MESSAGE_TEXT:
                stateCopy.newMessageText = action.newTextMessage;
                return stateCopy;

            case ADD_MESSAGE:
                let text = state.newMessageText;
                stateCopy.newMessageText = '';
                stateCopy.usersDialogs.rightUser.push({id: 6, message: text});
                return stateCopy;

            default:
                return state;
        }

    };

    export const addMessageActionCreator = () =>({type: 'ADD-MESSAGE'});
    export const updateNewMessageTextActionCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE-TEXT', newTextMessage: text });

    export default  dialogsReducer;