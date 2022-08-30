import React from "react";
import {connect} from "react-redux";
import {DispatchType, StateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC, toggleIsFetchingAC,
    unfollowAC,
    userType
} from "../../redux/users-reducer";
import {UsersAPI} from "./UsersAPI";

type mapStateToPropsType = {
    users: userType[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

type mapDispatchToPropsType = {
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}


const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
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
    },
    toggleIsFetching: (isFetching: boolean) => {
        dispatch(toggleIsFetchingAC(isFetching))
    }
})

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)