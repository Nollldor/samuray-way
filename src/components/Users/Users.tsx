import axios from "axios";
import React from "react";
import {FC} from "react";
import {userType} from "../../redux/users-reducer";
import styles from './users.module.css'
import userPhoto from '../../assets/img/small-user-avatar.png'

type UsersPropsType = {
    users: userType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: userType[]) => void
}

export const Users: FC<UsersPropsType> = ({users, follow, unfollow, setUsers}) => {

    if(users.length===0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>{
            setUsers(response.data.items)
        })
    }

    return (
        <div>
            {
                users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <img src={u.photos.small? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                            </span>
                            <span>
                                {u.followed? <button onClick={()=>unfollow(u.id)}>Unfollow</button>
                                    :<button onClick={()=>follow(u.id)}>Follow</button> }
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