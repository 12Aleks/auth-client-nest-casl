import type {NextPage} from 'next'
import React, {useEffect} from "react";
import Head from "next/head";
import {useRouter} from "next/router";
import {Col, Container, Row} from "react-bootstrap";
import FormAuth from "../components/FormAuth";
import {useApiDispatch, useApiSelector} from "../store/hoock";
import {logout} from "../store/slices/auth.slice";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import('../components/Loading'))
const Error = dynamic(() => import("../components/Error"))

const IndexPage: NextPage = () => {
    const {isLoading, error, userToken} = useApiSelector(state => state.auth)
    const router = useRouter()
    const dispatch = useApiDispatch()

    useEffect(() => {
        userToken && router.push('/articles')
    }, [userToken])

    function returnFn(): void {
        dispatch(logout())
    }


    return (
        <>
            <Head>
                <title>Authorization | auth</title>
                <meta content='auth subpage' name='auth'/>
                <meta name="author" content="Leszek"/>
                <meta name="keywords" content="next, javascript, nest, auth"/>
            </Head>
            <section className='main auth'>
                <Container>
                    <Row>
                        <Col className="auth d-flex justify-content-center align-items-center">
                            {
                                isLoading ?
                                    <Loading/> :
                                    error ?
                                        <Error error={error} returnFn={returnFn}/> : !userToken ?
                                            <FormAuth/> :
                                            <Loading/>
                            }


                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default IndexPage
