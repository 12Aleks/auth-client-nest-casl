import type { NextPage } from 'next'
import {useGetAllUsersQuery} from "../store/api/api.slice";
import MainLayout from "../MainLayout";
import {Col} from "react-bootstrap";
import FormAuth from "../components/FormAuth";
const IndexPage: NextPage = () => {
    const {data, isLoading, error} = useGetAllUsersQuery()
    console.log(data)

    return (
     <MainLayout title='auth' content={'Auth subpage'}>
         <Col className="auth d-flex justify-content-center align-items-center">
             <FormAuth/>
         </Col>
     </MainLayout>
  )
}

export default IndexPage
