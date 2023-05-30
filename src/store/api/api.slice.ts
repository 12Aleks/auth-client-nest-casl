import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {IUser} from "../../types";


export const apiSlice = createApi({
    reducerPath: "reviewApi",
    baseQuery: fetchBaseQuery(
        {baseUrl: 'http://localhost:5000/'}
    ),
    endpoints: (builder) => ({
        getAllUsers: builder.query<IUser[], void>({
            query: () => ({
                url: 'users'
            }),
        })
    })
})


export const {
  useGetAllUsersQuery
} = apiSlice;
