import {FC, ReactNode, useEffect} from 'react';
import Head from "next/head";
import {Container, Row} from "react-bootstrap";
import {useApiDispatch, useApiSelector} from "./store/hoock";
import {checkToken} from "./store/slices/auth.slice";
import Header from "./components/Header";

interface ILayout {
    children: ReactNode,
    title?: string,
    content: string
}


const MainLayout: FC<ILayout> = ({children, title, content}) => {
    const dispatch = useApiDispatch()

    useEffect(() => {
        const token = localStorage.getItem('token')
        token && dispatch(checkToken(token))
    }, [])

    return (
        <>
            <Head>
                <title>Autorization | {title}</title>
                <meta content={content} name={title} />
                <meta name="author" content="Leszek" />
                <meta name="keywords" content="next, javascript, nest, auth" />
            </Head>
            {title !== 'auth' && <Header/>}
            <section className={'main ' + title}>
                <Container >
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

export default MainLayout;

