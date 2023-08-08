import {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import MainLayout from "../MainLayout";
import {decoding} from "../routing/decoding";
import {ADMIN_ROUTE, HOME_ROUTE} from "../routing/paths";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';
import Styles from '../styles/admin.module.scss'
import ArticleList from "../components/ArticleList";
import NewArticle from "../components/NewArticle";
import Comments from "../components/Comments";
import Media from "../components/Media";
import Users from "../components/Users";

const Admin = () => {
    const router = useRouter()
    const menu  = ['new', 'articles', 'comments', 'media', 'users'];
    const [active, setActive] = useState<string>('articles')
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
            <Col lg={3}>
                <h3 className={Styles.panel_title} >Content</h3>
                  <p className={Styles.menu} onClick={() => setActive('new')}><i className="bi bi-pen"></i> New Article</p>
                  <p className={Styles.menu} onClick={() => setActive('articles')}><i className="bi bi-folder"></i> Articles</p>
                  <p className={Styles.menu} onClick={() => setActive( 'comments')}><i className="bi bi-chat-square"></i> Comments</p>
                  <p className={Styles.menu} onClick={() => setActive('media')}><i className="bi bi-card-image"></i> Media</p>
                <h3 className={Styles.panel_title}>Users</h3>
                   <p className={Styles.menu} onClick={() => setActive('users')}><i className="bi bi-people"></i> Users</p>
            </Col>
            <Col lg={9}>
                <Table striped bordered hover>
                    {
                        active === 'articles'? <ArticleList/>:
                        active === 'new' ? <NewArticle/>:
                        active === 'comments'? <Comments />:
                        active === 'media' ? <Media/>:
                        <Users/>
                    }

                </Table>
            </Col>
        </MainLayout>
    );
};

export default Admin;