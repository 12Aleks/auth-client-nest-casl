import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {HYDRATE} from "next-redux-wrapper";
import type { RootState } from '../store'
import {IUser} from "../../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery(
        {
            baseUrl: `${API_URL}`,
            prepareHeaders: (headers, { getState }) => {
                const token = (getState() as RootState).auth.userToken;

                console.log('API !!!!!!!!!!!!!!',token)

                if (token) {
                    headers.set('authorization', `Bearer ${token}`)
                }

                return headers
            }
        },
    ),
    extractRehydrationInfo(action, {reducerPath}) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath];
        }
    },
    tagTypes: ['User'],
    endpoints: (builder) => ({
        getAllUsers: builder.query<IUser[], void>({
            query: () => ({
                url: 'users'
            }),
            providesTags: () => ['User']
        }),
    })
})

// Export hooks for usage in functional components
export const {
    useGetAllUsersQuery
} = apiSlice;


// export endpoints for use in SSR
export const {
    getAllUsers
} = apiSlice.endpoints;
