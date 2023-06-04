import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {ILogin} from "../../types";

const API_URL =  process.env.NEXT_PUBLIC_API_URL;

export const userLogin = createAsyncThunk(
    'user/login',
    async (authData: ILogin, thunkAPI):Promise<string | any > => {
        try {
            const {data} = await axios.post(`${API_URL}auth/login`, authData)
            console.log('Auth action', data.access_token)
            localStorage.setItem('token', data.access_token)
            return data.access_token
        } catch(e) {
            return thunkAPI.rejectWithValue(`Error!!!`)
        }
    }
)


export const userSingUp = createAsyncThunk(
    'user/login',
    async (singUpData: ILogin, thunkAPI):Promise<string | any > => {
        try {
            const {data} = await axios.post(`${API_URL}auth/registration`, singUpData)
            console.log('Auth action', data.access_token)
            localStorage.setItem('token', data.access_token)
            return data.access_token
        } catch(e) {
            return thunkAPI.rejectWithValue(`Error!!!`)
        }
    }
)
