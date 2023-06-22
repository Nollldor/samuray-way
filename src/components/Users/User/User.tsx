import React, {FC} from "react";
import styles from "components/Users/User/User.module.css";
import userPhoto from "assets/img/small-user-avatar.png";
import {UserType} from "redux/users-reducer";
import {NavLink} from "react-router-dom";
import {useDispatch} from "react-redux";

type PropsType = {
    user: UserType
    unfollow: (id: number) => void
    follow: (id: number) => void
    fetchingInProgress: number[]
}

export const User: FC<PropsType> = (
    {
        user,
        follow,
        unfollow,
        fetchingInProgress,
    }) => {
    const dispatch = useDispatch()

    return (

        <div>
            <span>
                <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small ? user.photos.small : userPhoto}
                         className={styles.usersPhoto}/>
                </NavLink>
            </span>
            <span>
                {user.followed ?
                    <button disabled={fetchingInProgress.some(uid => uid === user.id)} onClick={() => {
                        dispatch(unfollow(user.id))
                    }}>Unfollow</button>

                    : <button disabled={fetchingInProgress.some(uid => uid === user.id)} onClick={() => {
                        dispatch(follow(user.id))
                    }}>Follow</button>}
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span>
            </span>
        </div>
    )
}