import {FC, memo, ReactNode, useEffect} from 'react';
import Head from "next/head";
import {Container, Row} from "react-bootstrap";
import {useApiDispatch} from "./store/hoock";
import {checkToken} from "./store/slices/auth.slice";
import Header from "./components/Header";
import {useRouter} from "next/router";
import { LOGIN_ROUTE} from "./routing/paths";

interface ILayout {
    children: ReactNode,
    title?: string,
    content: string
}

const MainLayout: FC<ILayout> = ({children, title, content}) => {
    const dispatch = useApiDispatch()
    const router = useRouter()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            dispatch(checkToken(token))
        }
        // else {
        //     router.push(LOGIN_ROUTE)
        // }
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

