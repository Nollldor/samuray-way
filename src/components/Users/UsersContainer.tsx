import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {DispatchType, StateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, userType} from "../../redux/users-reducer";
import {UsersClassComponent} from "./UsersClassComponent";

type mapStateToPropsType = {
    users: userType[]
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: userType[]) => void
}


const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    users: state.usersPage.users
})

const mapDispatchToProps = (dispatch: DispatchType): mapDispatchToPropsType => ({
    follow: (id) => {
        dispatch(followAC(id))
    },
    unfollow: (id) => {
        dispatch(unfollowAC(id))
    },
    setUsers: (users) => {
        dispatch(setUsersAC(users))
    }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)