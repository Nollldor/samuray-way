import {createStore, combineReducers} from "redux";
import {AddPostActionCreator, ChangeNewPostTextActionCreator, profileReducer} from "./profile-reducer";
import {
    AddMessageActionCreator,
    dialogsReducer,
    UpdateMessageBodyActionCreator
} from "./dialogs-reducer";
import {followAC, setUsersAC, unfollowAC, usersReducer} from "./users-reducer";

export type StoreType = ReturnType<typeof createStore>

export type ActionsTypes =
    ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof ChangeNewPostTextActionCreator>
    | ReturnType<typeof AddMessageActionCreator>
    | ReturnType<typeof UpdateMessageBodyActionCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})


export const store = createStore(rootReducer)

export type StateType = ReturnType<typeof store.getState>

export type DispatchType = typeof store.dispatch