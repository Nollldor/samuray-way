import React from "react";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    followSuccess,
    setCurrentPage,
    unfollowSuccess,
    userType,
    toggleFetchingProgress, getUsersTC, follow, unfollow
} from "../../redux/users-reducer";
import {UsersSubContainer} from "./UsersSubContainer";
import {
    getCurrentPage, getFetchingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/Selectors/Users-selectors";

type mapStateToPropsType = {
    users: userType[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    fetchingInProgress: number[]
}

const mapStateToProps = (state: StateType): mapStateToPropsType => ({
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount:getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    fetchingInProgress: getFetchingInProgress(state)
})


export const UsersContainer = connect(mapStateToProps, {
    setCurrentPage,
    getUsers: getUsersTC,
    follow,
    unfollow
})(UsersSubContainer)