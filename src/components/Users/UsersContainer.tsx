import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {DispatchType, StateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    userType
} from "../../redux/users-reducer";
import {UsersClassComponent} from "./UsersClassComponent";

type mapStateToPropsType = {
    users: userType[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
}


const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (page: number) => {
        dispatch((setCurrentPageAC(page)))
    },
    setTotalUsersCount: (totalUsersCount: number) => {
        dispatch((setTotalUsersCountAC(totalUsersCount)))
    }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClassComponent)