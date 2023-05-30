import {configureStore, combineReducers, ThunkAction, Action} from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import usersSlice from "./slices/users.slice";
import {apiSlice} from "./api/api.slice";


const rootReducer = combineReducers({
    users: usersSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
