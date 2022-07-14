import React from "react";
import {FC} from "react";
import {userType} from "../../redux/users-reducer";
import styles from './users.module.css'
type UsersPropsType = {
    users: userType[]
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: userType[]) => void
}

export const Users: FC<UsersPropsType> = ({users, follow, unfollow, setUsers}) => {

    if(users.length===0){
        setUsers([
            {
                id: 1,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sGddmMZFZCqb7aJFx5eV-8FGj2gJWz7abGntj8IuyYdAv7W2HEJyi5WY3xbpLLzf-Zg&usqp=CAU',
                followed: true,
                fullName: "Dmitry",
                status: "I'm a boss",
                location: {country: "Belarus", city: "Minsk"}
            },
            {
                id: 2,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sGddmMZFZCqb7aJFx5eV-8FGj2gJWz7abGntj8IuyYdAv7W2HEJyi5WY3xbpLLzf-Zg&usqp=CAU',
                followed: false,
                fullName: "Igor",
                status: "I'm a boss too",
                location: {country: "Russia", city: "Moscow"}
            },
            {
                id: 3,
                photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sGddmMZFZCqb7aJFx5eV-8FGj2gJWz7abGntj8IuyYdAv7W2HEJyi5WY3xbpLLzf-Zg&usqp=CAU',
                followed: true,
                fullName: "Victor",
                status: "I'm a boss too!!",
                location: {country: "Ukraine", city: "Kiev"}
            },
        ])
    }

    return (
        <div>
            {
                users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <img src={u.photoUrl} className={styles.usersPhoto}/>
                            </span>
                            <span>
                                {u.followed? <button onClick={()=>unfollow(u.id)}>Unfollow</button>
                                    :<button onClick={()=>follow(u.id)}>Follow</button> }
                            </span>

                            <span>
                                <span>
                                    <div>{u.fullName}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{u.location.country}</div>
                                    <div>{u.location.city}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}