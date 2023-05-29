import {
    fetchBaseQuery,
    buildCreateApi,
    coreModule,
    reactHooksModule,
} from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import {IUser} from "../../types";

const createApi = buildCreateApi(
    coreModule(),
    reactHooksModule({ unstable__sideEffectsInRender: true })
)
export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000'}),
    tagTypes: ['USERS'],
    extractRehydrationInfo(action, { reducerPath }) {
        if (action.type === HYDRATE) {
            return action.payload[reducerPath]
        }
    },
    endpoints: builder => ({
        getAllUsers: builder.query<IUser[], number>({
            query: () => `/users`,
            providesTags:  ['USERS']
        })
    })
})


export const {
  useGetAllUsersQuery
} = apiSlice;
export const { getAllUsers } = apiSlice.endpoints;