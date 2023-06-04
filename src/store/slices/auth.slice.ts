import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAuth} from "../../types";
import {userLogin} from "../actions/auth.action";





const initialState:IAuth = {
    isLoading: false,
    userToken: '',
    error: '',
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem('token')
            state.isLoading = false
            state.userToken = ''
            state.error = ''
        },
        checkToken: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = ''
            state.userToken = action.payload
        }
    },
    extraReducers: {
           [userLogin.fulfilled.type]: (state, action: PayloadAction<string>) => {
               state.isLoading = false
               state.error = ''
               state.userToken = action.payload
           },
           [userLogin.pending.type]: (state) => {
               state.isLoading = true;
           },
           [userLogin.rejected.type]: (state, action: PayloadAction<string>) => {
               state.isLoading = false;
               state.error = action.payload
           }
    }
})


export const { logout,checkToken} = authSlice.actions
export default authSlice.reducer