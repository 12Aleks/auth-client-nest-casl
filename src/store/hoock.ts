import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import {AppDispatch, RootState} from "./store";


export const useApiSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useApiDispatch: () => AppDispatch = useDispatch