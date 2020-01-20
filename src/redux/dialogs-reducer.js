    const ADD_MESSAGE = 'ADD-MESSAGE';
    const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

    let initialState = {
        
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