import jwtDecode from "jwt-decode";
import {IUser, IToken} from "../types";

export const protectedRoute = (): Pick<IUser, "name" | "role"> | boolean => {
    const token = localStorage.getItem('token')
    if (token) {
        const d: IToken = jwtDecode(token)
        return {name: d.username, role: d.userRole}
    } else {
        return false
    }
}