import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {HYDRATE} from "next-redux-wrapper";
import type { RootState } from '../store'
import {IArticle, IUser} from "../../types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery(
        {
            baseUrl: `${API_URL}`,
            prepareHeaders: (headers, { getState }) => {
                const token:string|null = (getState() as RootState).auth.userToken;

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
    tagTypes: ['User', 'Articles'],
    endpoints: (builder) => ({
        getAllUsers: builder.query<IUser[], void>({
            query: () => ({
                url: 'users'
            }),
            providesTags: () => ['User']
        }),

        getAllArticles: builder.query<IArticle[], void>({
            query: () => ({
                url: '/articles'
            }),
            providesTags: () => ['Articles']
        })
    })
})

// Export hooks for usage in functional components
export const {
    useGetAllUsersQuery,
    useGetAllArticlesQuery,
    util: {getRunningQueriesThunk}
} = apiSlice;


// export endpoints for use in SSR
export const { getAllUsers,  getAllArticles } = apiSlice.endpoints;
