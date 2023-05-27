import {configureStore, combineReducers} from '@reduxjs/toolkit';


const rootReducer = combineReducers({

})

export const RootStore = () => configureStore({
    reducer: rootReducer
})

export type AppStore = ReturnType<typeof RootStore>
export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = AppStore['dispatch']