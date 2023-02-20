import {usersPageType} from "../users-reducer";

export const getUsers = (UsersPageData: usersPageType) => UsersPageData.users

export const getPageSize = (UsersPageData: usersPageType) => UsersPageData.pageSize

export const getTotalUsersCount = (UsersPageData: usersPageType) => UsersPageData.totalUsersCount

export const getCurrentPage = (UsersPageData: usersPageType) => UsersPageData.currentPage

export const getIsFetching = (UsersPageData: usersPageType) => UsersPageData.isFetching

export const getFetchingInProgress = (UsersPageData: usersPageType) => UsersPageData.fetchingInProgress