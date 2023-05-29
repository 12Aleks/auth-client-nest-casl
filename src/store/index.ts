import {configureStore, combineReducers, ThunkAction, Action} from '@reduxjs/toolkit';
import { createWrapper } from "next-redux-wrapper";
import usersSlice from "./slices/users.slice";
import {apiSlice} from "./api/api.slice";


const rootReducer = combineReducers({
    users: usersSlice,
    [apiSlice.reducerPath]: apiSlice.reducer
})

export const makeStore = () => configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})


export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });