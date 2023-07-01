import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getNews} from "../actions/news.action";
import {INews} from "../../types";
import {HYDRATE} from "next-redux-wrapper";

export interface INewsSlice {
    news: INews[],
    isLoading: boolean,
    error: string
}

const initialState: INewsSlice = {
    news: [],
    isLoading: false,
    error: ''
}

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.news,
            }
        },
        [getNews.fulfilled.type]: (state, action: PayloadAction<INews[]>) => {
            state.news = action.payload
            state.isLoading = false
            state.error = ''
        },
        [getNews.pending.type]: (state) => {
            state.isLoading = true;
        },
        [getNews.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        }
    }
})

export default newsSlice.reducer
