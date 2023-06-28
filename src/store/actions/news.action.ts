import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const news = createAsyncThunk(
    'news',
    async (_, thunkApi) => {
        try {
            const data = await axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2023-06-28&sortBy=popularity&apiKey=${API_KEY}`)
            console.log(data)

        } catch (e) {

        }
    }
)