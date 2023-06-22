import React, {FC, useEffect} from "react";
import {followTC, getUsersTC, setCurrentPage, unfollowTC, UsersPageType, UserType} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";
import {useDispatch, useSelector} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {
    getCurrentPage, getFetchingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/Selectors/Users-selectors";

type UsersPropsType = {

}

export const UsersContainer: FC<UsersPropsType> = () => {

    const UserPageData = useSelector<StateType, UsersPageType>(state => state.usersPage)
    const dispatch = useDispatch()

    const users: UserType[] = getUsers(UserPageData)
    const pageSize: number = getPageSize(UserPageData)
    const totalUsersCount: number = getTotalUsersCount(UserPageData)
    const currentPage: number = getCurrentPage(UserPageData)
    const isFetching: boolean = getIsFetching(UserPageData)
    const fetchingInProgress: number[] = getFetchingInProgress(UserPageData)



    useEffect(() => {
        dispatch(getUsersTC(currentPage, pageSize))
    }, [])

    const onPageChanged = (pageNumber: number) => {
        dispatch(getUsersTC(pageNumber, pageSize))
        dispatch(setCurrentPage(pageNumber))
    }

    return (
        <>
            {isFetching && <Preloader/>}
            <Users
                users={users}
                pageSize={pageSize}
                totalUsersCount={totalUsersCount}
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                follow={followTC}
                unfollow={unfollowTC}
                fetchingInProgress={fetchingInProgress}
            />
        </>

    )
}
