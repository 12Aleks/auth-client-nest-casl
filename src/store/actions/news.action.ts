import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {INews} from "../../types";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

export const getNews = createAsyncThunk(
    'news/thunk',
    async (_, thunkApi):Promise<INews[] | any > => {
        try {
            const { data } = await axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2023-06-28&sortBy=popularity&apiKey=${API_KEY}`)
            return data.articles
        } catch (error) {
            if(error instanceof Error){
                return thunkApi.rejectWithValue(error.message)
            }
        }
    }
)