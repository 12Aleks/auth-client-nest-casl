import {createSlice, Slice} from '@reduxjs/toolkit'
import {IUser} from "../../types";

interface IUsers {
    users: IUser[]
}

const initialState: IUsers = {
    users: []
}
export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
})

export default usersSlice.reducer