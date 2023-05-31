import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {HYDRATE} from "next-redux-wrapper";
import {IUser} from "../../types";


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery(
        {baseUrl: 'http://localhost:5000/'}
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
