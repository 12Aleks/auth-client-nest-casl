import React from 'react';
import {useGetAllUsersQuery} from "../store/api/api.slice";
import dynamic from "next/dynamic";
import {IUser} from "../types";
const Loading = dynamic(() => import('../components/Loading'))
const Error = dynamic(() => import('../components/Error'))
const Users = () => {
    const {data: users, error, isLoading} = useGetAllUsersQuery()

    console.log(users)

    return (
        <>
            <thead>
            <tr>
                <th className="text-center">#</th>
                <th className="text-center">User name</th>
                <th className="text-center">User email</th>
                <th className="text-center">Role</th>
                <th className="text-center">Update/Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                // isLoading ? <Loading/> :
                //     error ? <Error error={error}/> :
                        <>
                            {/*{*/}
                            {/*    users?.map((user, index) =>*/}
                            {/*        <tr key={user._id}>*/}
                            {/*            <td className="text-center">{index + 1}</td>*/}
                            {/*            <td>{user.name}</td>*/}
                            {/*            <td>{user.email}</td>*/}
                            {/*            <td>{user.role}</td>*/}
                            {/*            <td><i className="bi bi-pencil mr-auto"></i><i className="bi bi-trash ml-auto"></i></td>*/}
                            {/*        </tr>*/}
                            {/*    )*/}
                            {/*}*/}
                        </>
            }
            </tbody>
        </>
    );
};

export default Users;