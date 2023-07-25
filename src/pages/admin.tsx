import {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import MainLayout from "../MainLayout";
import {decoding} from "../routing/decoding";
import {ADMIN_ROUTE, HOME_ROUTE} from "../routing/paths";

const Admin = () => {
    const router = useRouter()
    const [loading, onLoading] = useState<boolean>(false)

    useEffect(() => {
        const data = decoding()
        if(!['admin', 'editor'].includes(data?.role as string) && router.pathname == ADMIN_ROUTE) {
            router.push(HOME_ROUTE)
        }
        onLoading(true)
    }, [])

    if(!loading) return <h1>Loading ....</h1>

    return (
        <MainLayout title='Authorization | admin' content='Admin subpage'>
            <h1 className='title'>Admin</h1>
        </MainLayout>
    );
};

export default Admin;