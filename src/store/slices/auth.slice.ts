import { createSlice } from '@reduxjs/toolkit';
import {IAuth} from "../../types";




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
            state.isLoading = false
            state.userToken = ''
            state.error = ''
        }
    },
    extraReducers: {

    }
})