import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import MainLayout from "../MainLayout";
import {useApiSelector} from "../store/hoock";

const Admin = () => {
    const router = useRouter()



    return (
        <MainLayout  title='Authorization | admin' content='Admin subpage'>
            <h1 className='title'>Admin</h1>
        </MainLayout>
    );
};

export default Admin;