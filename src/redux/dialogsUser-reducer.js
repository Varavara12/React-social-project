    const SET_DIALOGS_USERS = 'SET-DIALOGS-USERS';

    let initialState = {
           dialogsUser: []

    };

    const dialogsUserReducer = (state = initialState, action) => {

      switch (action.type) {

        case SET_DIALOGS_USERS: {
            return {...state, dialogsUser: [...state.dialogsUser, ...action.dialogsUser]}
        }

        default:
            return state
    }

    };

    export const setDialogsUsersAC = (dialogsUser) => ({type: SET_DIALOGS_USERS, dialogsUser });

    export default  dialogsUserReducer;