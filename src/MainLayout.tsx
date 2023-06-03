import {FC, ReactNode} from 'react';
import Head from "next/head";
import {Container, Row} from "react-bootstrap";

interface ILayout {
    children: ReactNode,
    title?: string
}


const MainLayout: FC<ILayout> = ({children, title}) => {
    return (
        <>
            <Head>
                <title>Autorization | {title}</title>
            </Head>
            <div className="navbar"></div>
            <Container className="main">
                <Row>
                    {children}
                </Row>
            </Container>
            <div className="footer">

            </div>
        </>
    );
};

export default MainLayout;
