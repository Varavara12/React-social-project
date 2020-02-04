import {userAPI} from "../api/api";
import {updateObjectInArray} from "../components/utils/objectHelper/object-helper";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []
    
};

const usersReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true}) /*сделали хелпео вынесли в отдельную функцию чтоб не дублировался код*/
                /*
                    state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })*/
            };
        case UNFOLLOW:
             return  {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
                 /*state.users.map(u => {
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })*/
            };
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
    
};

export const followSuccess = (userId) =>({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId });
export const setUsers = (users) => ({type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });


export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true));
        dispatch(setCurrentPage(page));
        // создали запрос в одтельном файле и вызвали getUsers(DAL) api.js
        // И передали ей два параметра функции которые понадобяться к запросу на сервер
        let data = await userAPI.getUsers(page, pageSize);
        dispatch(toggleIsFetching(false));        // data - вернули в промисах только data место response(Все данные) в api.js чтоб были данные которые ей нужны
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));

    }
};
/*thunk санки*/
export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await userAPI.follow(userId)
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));
    }
};

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        let response = await userAPI.unfollow(userId)
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId));

    }

/*    props.toggleFollowingProgress(true, u.id);
    userAPI.unfollow(u.id)
        .then(response => {                              fРаньше как было в UI  когда от туда вызывалось
            if (response.data.resultCode === 0) {
                props.unfollow(u.id)
            }
            props.toggleFollowingProgress(false, u.id);
        });*/
};


export default usersReducer;