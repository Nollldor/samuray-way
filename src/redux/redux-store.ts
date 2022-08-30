import {createStore, combineReducers} from "redux";
import {AddPost, ChangeNewPostText, profileReducer, setUserProfile} from "./profile-reducer";
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
    ReturnType<typeof AddPost>
    | ReturnType<typeof ChangeNewPostText>
    | ReturnType<typeof AddMessageActionCreator>
    | ReturnType<typeof UpdateMessageBodyActionCreator>
    | ReturnType<typeof follow>
    | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
})


export const store = createStore(rootReducer)

export type StateType = ReturnType<typeof store.getState>

export type DispatchType = typeof store.dispatch