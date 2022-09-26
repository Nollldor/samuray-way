import React from "react";
import {userType} from "../../redux/users-reducer";
import axios from "axios";
import {Users} from "./Users";
import preloader from "../../assets/img/preloader.gif"
import {Preloader} from "../common/Preloader/Preloader";

type UsersPropsType = {
    users: userType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: userType[]) => void
    setCurrentPage: (page: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export class UsersAPI extends React.Component<UsersPropsType> {


    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            , {withCredentials:true}).then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(+response.data.totalCount)
        })
    }

    onPageChanged = (p: number) => {
        this.props.toggleIsFetching(true)
        this.props.setCurrentPage(p)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }


    render = () => {


        return (
            <>
                {this.props.isFetching && <Preloader/>}
                <Users
                    users={this.props.users}
                    pageSize={this.props.pageSize}
                    totalUsersCount={this.props.totalUsersCount}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}

                />
            </>

        )
    }
}