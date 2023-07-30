import jwtDecode from "jwt-decode";
import {IUser, IToken} from "../types";
import Cookies from "js-cookie";



export const decoding = (): Pick<IUser, "name" | "role"> | null => {
    const token = localStorage.getItem('token')
    if (token) {
        const d: IToken = jwtDecode(token)
        d && Cookies.set("currentUser", JSON.stringify({name: d.username, role: d.userRole}), {expires: 1});
        return {name: d.username, role: d.userRole}
    } else {
        return null
    }
}