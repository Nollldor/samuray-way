import React from "react";
import userPhoto from "../../assets/img/small-user-avatar.png";
import styles from "./users.module.css";
import {userType} from "../../redux/users-reducer";
import axios from "axios";

type UsersPropsType = {
    users: userType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: userType[]) => void
}

export class UsersClassComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render = () => {
        return (
            <div>
                {
                    this.props.users.map(u => {
                        return (
                            <div key={u.id}>
                            <span>
                                <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.usersPhoto}/>
                            </span>
                                <span>
                                {u.followed ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                    : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
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
}