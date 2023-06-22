import React, {FC} from "react";
import styles from "components/Users/Users.module.css";
import userPhoto from "assets/img/small-user-avatar.png";
import {userType} from "redux/users-reducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Paginator} from "components/common/Paginator/Paginator";


type UsersPropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    unfollow: (id: number) => void
    follow: (id: number) => void
    onPageChanged: (page: number) => void
    users: userType[],
    fetchingInProgress: number[]
}

export const Users: FC<UsersPropsType> = (
    {
        currentPage,
        pageSize,
        totalUsersCount,
        follow,
        unfollow,
        onPageChanged,
        users,
        fetchingInProgress,
    }) => {
    const dispatch = useDispatch()

    return (
        <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged} pageSize={pageSize}
                       totalUsersCount={totalUsersCount}/>
            {
                users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <NavLink to={'/profile/' + u.id}>
                                    <img src={u.photos.small ? u.photos.small : userPhoto}
                                         className={styles.usersPhoto}/>
                                </NavLink>
                            </span>
                            <span>
                                {u.followed ?
                                    <button disabled={fetchingInProgress.some(uid => uid === u.id)} onClick={() => {
                                        dispatch(unfollow(u.id))
                                    }}>Unfollow</button>

                                    : <button disabled={fetchingInProgress.some(uid => uid === u.id)} onClick={() => {
                                        dispatch(follow(u.id))
                                    }}>Follow</button>}
                            </span>

                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}