import {configureStore, combineReducers} from '@reduxjs/toolkit';
import usersSlice from "./slices/users.slice";
import {reducer} from "next/dist/client/components/router-reducer/router-reducer";
import {usersApi} from "./api/users.api";


const rootReducer = combineReducers({
    users: usersSlice,
    [usersApi.reducerPath]: usersApi.reducer
})

export const RootStore = () => configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(usersApi.middleware)
})

export type AppStore = ReturnType<typeof RootStore>
export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']