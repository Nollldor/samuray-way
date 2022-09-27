import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleIsFetching,
    unfollow,
    userType
} from "../../redux/users-reducer";
import {UsersSubContainer} from "./UsersSubContainer";

type mapStateToPropsType = {
    users: userType[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
})


export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersSubContainer)