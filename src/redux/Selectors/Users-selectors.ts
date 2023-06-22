import {UsersPageType} from "../users-reducer";

export const getUsers = (UsersPageData: UsersPageType) => UsersPageData.users

export const getPageSize = (UsersPageData: UsersPageType) => UsersPageData.pageSize

export const getTotalUsersCount = (UsersPageData: UsersPageType) => UsersPageData.totalUsersCount

export const getCurrentPage = (UsersPageData: UsersPageType) => UsersPageData.currentPage

export const getIsFetching = (UsersPageData: UsersPageType) => UsersPageData.isFetching

export const getFetchingInProgress = (UsersPageData: UsersPageType) => UsersPageData.fetchingInProgress