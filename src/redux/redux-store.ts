import {createStore, combineReducers} from "redux";
import {AddPostActionCreator, ChangeNewPostTextActionCreator, profileReducer} from "./profile-reducer";
import {
    AddMessageActionCreator,
    dialogsReducer,
    UpdateMessageBodyActionCreator
} from "./dialogs-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    usersReducer
} from "./users-reducer";

export type StoreType = ReturnType<typeof createStore>

export type ActionsTypes =
    ReturnType<typeof AddPostActionCreator>
    | ReturnType<typeof ChangeNewPostTextActionCreator>
    | ReturnType<typeof AddMessageActionCreator>
    | ReturnType<typeof UpdateMessageBodyActionCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})


export const store = createStore(rootReducer)

export type StateType = ReturnType<typeof store.getState>

export type DispatchType = typeof store.dispatch