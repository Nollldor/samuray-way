import {UserType} from "../redux/users-reducer";

export const updateObjectInArray = (items: UserType[], itemId: number, newUsersProps: any) => {
    return items.map(u => u.id === itemId ? {...u, ...newUsersProps} : u)
}

