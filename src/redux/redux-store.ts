import {createStore, combineReducers, applyMiddleware} from "redux";
import {AddPost, profileReducer, setStatus, setUserProfile} from "./profile-reducer";
import {
    AddMessageActionCreator,
    dialogsReducer
} from "./dialogs-reducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFetchingProgress,
    toggleIsFetching,
    unfollowSuccess,
    usersReducer
} from "./users-reducer";
import {authReducer, setUserData} from "./auth-reducer";
import thunk from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer, setInitializedAC} from "./app-reducer";

export type StoreType = ReturnType<typeof createStore>

export type ActionsTypes =
    ReturnType<typeof AddPost>
    | ReturnType<typeof AddMessageActionCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setUserData>
    | ReturnType<typeof toggleFetchingProgress>
    | ReturnType<typeof setStatus>
    | ReturnType<typeof setInitializedAC>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})


export const store = createStore(rootReducer, applyMiddleware(thunk))


export type StateType = ReturnType<typeof store.getState>

export type DispatchType = typeof store.dispatch