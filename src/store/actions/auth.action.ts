import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {ILogin} from "../../types";
import Cookies from "js-cookie";

const API_URL =  process.env.NEXT_PUBLIC_API_URL;

export const userLogin = createAsyncThunk(
    'user/login',
    async (authData: ILogin, thunkAPI):Promise<string | any > => {
        try {
            const {data} = await axios.post(`${API_URL}auth/login`, authData)
            Cookies.set("token", JSON.stringify(data.access_token), {expires: 1});
            // localStorage.setItem('token', data.access_token)
            return data.access_token
        } catch(error) {
            if(error instanceof Error){
                return thunkAPI.rejectWithValue(error.message)
            }
        }
    }
)


export const userSingUp = createAsyncThunk(
    'user/sing',
    async (singUpData: ILogin, thunkAPI):Promise<string | any > => {
        try {
            const {data} = await axios.post(`${API_URL}auth/registration`, singUpData)
            Cookies.set("token", JSON.stringify(data.access_token), {expires: 1});
            // localStorage.setItem('token', data.access_token)
            return data.access_token
        } catch(error) {
            if(error instanceof Error){
                return thunkAPI.rejectWithValue(`Error during registration!!! ${error.message}`)
            }
        }
    }
)


