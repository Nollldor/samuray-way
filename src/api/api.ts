import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        "API-KEY": "aa4d6d6d-ce89-48a6-9ff2-f1882bdbfab4"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(uID: number) {
        return instance.post<FollowResponseType>(`follow/${uID}`).then(response => {
            return response.data
        })
    },

    unfollow(uID: number) {
        return instance.delete<FollowResponseType>(`follow/${uID}`).then(response => {
            return response.data
        })
    }
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance.post(`auth/login`,{email, password, rememberMe}).then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    }
}

export const profileAPI = {
    getProfile(uID: number) {
        return instance.get(`profile/${uID}`).then(response => {
            return response.data
        })
    },
    getStatus(uID: number) {
        return instance.get(`profile/status/${uID}`).then(response => {
            return response.data
        })
    },
    updateStatus(status: string) {
        return instance.put(`profile/status/`, {status}).then(response => {
            return response.data
        })
    },
}

export type FollowResponseType = {
    resultCode: number,
    messages: Array<string>[]
    data: {}
}