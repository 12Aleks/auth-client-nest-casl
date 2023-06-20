import {FC, memo, ReactNode, useEffect} from 'react';
import Head from "next/head";
import {Container, Row} from "react-bootstrap";
import {useApiDispatch, useApiSelector} from "./store/hoock";
import {checkToken} from "./store/slices/auth.slice";
import Header from "./components/Header";
import {decoding} from "./routing/decoding";
import {IUser} from "./types";
import {useRouter} from "next/router";
import {ADMIN_ROUTE, HOME_ROUTE, LOGIN_ROUTE} from "./routing/paths";

interface ILayout {
    children: ReactNode,
    title?: string,
    content: string
}

const MainLayout: FC<ILayout> = ({children, title, content}) => {
    const dispatch = useApiDispatch()
    const router = useRouter()

    console.log()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            dispatch(checkToken(token))
            const data = decoding(token)
            !data?.role ? router.push(LOGIN_ROUTE) :
                (router.pathname == ADMIN_ROUTE && data?.role != 'admin' || data?.role != 'editor') ? router.push(HOME_ROUTE) : ''
        } else {
            router.push(LOGIN_ROUTE)
        }
    }, [])


    return (
        <>
            <Head>
                <title>{title}</title>
                <meta content={content} name={title}/>
                <meta name="author" content="Leszek"/>
                <meta name="keywords" content="next, javascript, nest, auth"/>
            </Head>
            <Header/>
            <section className='main'>
                <Container>
                    <Row>
                        {children}
                    </Row>
                </Container>
            </section>
            <div className="footer">
            </div>
        </>
    );
};

export default memo(MainLayout);

