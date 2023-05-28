import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IUser} from "../../types";

const HOST = process.env.HOST
export const usersApi = createApi({
    reducerPath: 'user/api',
    baseQuery: fetchBaseQuery({baseUrl: `${HOST}`}),
    tagTypes: ['USER'],
    endpoints: build => ({
        getAllUsers: build.query<IUser[], number >({
            query: (limit: number = 10) => ({
                url: '/users',
                params: {
                    _limit: limit
                }
            })
        })
    })
})