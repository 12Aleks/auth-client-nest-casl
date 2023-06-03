import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {ILogin} from "../../types";

const API_URL = process.env.NEXT_PUBLICK_API_URL
export const userLogin = createAsyncThunk(
    'user/login',
    async (authData: ILogin, thunkAPI) => {
        try {
            const {data} = await axios.post(`${API_URL}/auth/login`, authData)
            console.log(data)
            localStorage.setItem('token', data.token)
            return data.token
        } catch {
            return thunkAPI.rejectWithValue(`Error!!!`)
        }
    }
)

