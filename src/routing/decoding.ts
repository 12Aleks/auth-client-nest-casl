import jwtDecode from "jwt-decode";
import {IUser, IToken} from "../types";
import Cookies from "js-cookie";



export const decoding = ():Pick<IUser, "name" | "role"> | null => {
    // const token = localStorage.getItem('token')
    const token = Cookies.get("token");
    if (token) {
        const data = jwtDecode(token)
        const tokenType: IToken = <IToken>data
        Cookies.set('current_user', JSON.stringify({name: tokenType.username, role: tokenType.userRole}), { expires: 1})
        return {name: tokenType.username, role: tokenType.userRole}
    } else {
        return null
    }
}