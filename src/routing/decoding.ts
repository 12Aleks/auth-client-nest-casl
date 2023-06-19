import jwtDecode from "jwt-decode";
import {IUser, IToken} from "../types";

export const decoding = (token: string): Pick<IUser, "name" | "role"> | null => {

    if (token) {
        const d: IToken = jwtDecode(token)
        return {name: d.username, role: d.userRole}
    } else {
        return null
    }
}