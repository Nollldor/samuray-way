import {userType} from "../redux/users-reducer";

export const updateObjectInArray = (items: userType[], itemId: number, newUsersProps: any) => {
    return items.map(u => u.id === itemId ? {...u, ...newUsersProps} : u)
}

