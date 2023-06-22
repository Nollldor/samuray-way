import {createStore, combineReducers, applyMiddleware, AnyAction, compose} from "redux";
import {addPost, deletePost, profileReducer, setStatus, setUserProfile} from "./profile-reducer";
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
import thunk, {ThunkAction, ThunkDispatch} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer, setInitializedAC} from "./app-reducer";

export type StoreType = ReturnType<typeof createStore>

export type ActionsTypes =
    ReturnType<typeof addPost>
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
    | ReturnType<typeof deletePost>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)))


/*export const store = createStore(rootReducer, applyMiddleware(thunk))*/

export type StateType = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, StateType, unknown, AnyAction>

export type DispatchType = typeof store.dispatch