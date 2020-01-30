    const ADD_MESSAGE = 'ADD-MESSAGE';

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
        
    };

    const dialogsReducer = (state = initialState, action) => {

        let stateCopy = {
            ...state,
            usersDialogs: {...state.usersDialogs},
            rightUser: [...state.usersDialogs.rightUser]
        };
        switch (action.type) {
            
            case ADD_MESSAGE:
                let text = action.newMessageText;
                stateCopy.usersDialogs.rightUser.push({id: 6, message: text});
                return stateCopy;

            default:
                return state;
        }

    };


    export const addMessageActionCreator = (newMessageText) =>({type: 'ADD-MESSAGE', newMessageText });

    export default  dialogsReducer;