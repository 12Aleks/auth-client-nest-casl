import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import {AppDispatch, AppState} from "./index";


export const useApiSelector: TypedUseSelectorHook<AppState> = useSelector
export const useApiDispatch: () => AppDispatch = useDispatch