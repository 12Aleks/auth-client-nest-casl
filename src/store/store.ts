import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import usersSlice from "./slices/users.slice";
import {newsSlice} from "./slices/news.slice";
import authSlice from "./slices/auth.slice";
import {apiSlice} from "./api/api.slice";
import {AnyAction} from 'redux'
import { ThunkDispatch} from "redux-thunk/es/types";


const rootReducer = combineReducers({
    users: usersSlice,
    auth: authSlice,
    [newsSlice.name]: newsSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
})

export const store = () => configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})


export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(store, { debug: true });
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>