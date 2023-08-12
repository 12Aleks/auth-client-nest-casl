import {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import dynamic from "next/dynamic";
import MainLayout from "../MainLayout";
import {decoding} from "../routing/decoding";
import {ADMIN_ROUTE, HOME_ROUTE} from "../routing/paths";
import Col from "react-bootstrap/Col";
import Table from 'react-bootstrap/Table';
import Styles from '../styles/admin.module.scss'

const Loading = dynamic(() => import('../components/Loading'))
const Users = dynamic(() => import('../components/Users'))
const Comments = dynamic(() => import('../components/Comments'))
const Media = dynamic(() => import('../components/Media'))
const NewArticle = dynamic(() => import('../components/NewArticle'))
const ArticleList = dynamic(() => import('../components/ArticleList'))

const Admin = () => {
    const router = useRouter()
    const [active, setActive] = useState<string>('articles')
    const [loading, onLoading] = useState<boolean>(false)

    useEffect(() => {
        const data = decoding()
        if(!['admin', 'editor'].includes(data?.role as string) && router.pathname == ADMIN_ROUTE) {
            router.push(HOME_ROUTE)
        }
        onLoading(true)
    }, [])



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
                {   !loading? <Loading/>:
                    <Table striped bordered hover size="sm">
                        {
                            active === 'articles'? <ArticleList/>:
                                active === 'new' ? <NewArticle/>:
                                    active === 'comments'? <Comments />:
                                        active === 'media' ? <Media/>:
                                            <Users/>
                        }
                    </Table>
                }

            </Col>
        </MainLayout>
    );
};

export default Admin;