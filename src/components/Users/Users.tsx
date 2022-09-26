import React, {FC} from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/img/small-user-avatar.png";
import {userType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    currentPage: number
    pageSize: number
    totalUsersCount: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChanged: (page: number) => void
    users: userType[]
}

export const Users: FC<UsersPropsType> = (
    {
        currentPage,
        pageSize,
        totalUsersCount,
        follow,
        unfollow,
        onPageChanged,
        users
    }) => {
    const pageCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((p, i) => <span className={currentPage === p ? styles.selectedPage : ""} key={i}
                                           onClick={() => onPageChanged(p)}>{p}</span>)}
            </div>
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
                                {u.followed ? <button onClick={() => {
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "aa4d6d6d-ce89-48a6-9ff2-f1882bdbfab4"
                                                }
                                            },
                                        ).then(response => {
                                            if (response.data.resultCode === 0) {
                                                unfollow(u.id)
                                            }
                                        })
                                        unfollow(u.id)

                                    }}>Unfollow</button>
                                    : <button onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "aa4d6d6d-ce89-48a6-9ff2-f1882bdbfab4"
                                                }
                                            }).then(response => {
                                            if (response.data.resultCode === 0) {
                                                follow(u.id)
                                            }
                                        })


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