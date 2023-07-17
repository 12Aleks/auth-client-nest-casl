import MainLayout from "../../MainLayout";
import {wrapper} from "../../store/store";
import {getRunningQueriesThunk, getSingleArticleByID, useGetSingleArticleByIDQuery} from "../../store/api/api.slice";
import {useRouter} from "next/router";
import {skipToken} from "@reduxjs/toolkit/query";
import {Card, Col, Row} from "react-bootstrap";
import dynamic from "next/dynamic";

const Loading = dynamic(() => import('../../components/Loading'))
const Error = dynamic(() => import('../../components/Error'))

const Article = () => {
    const router = useRouter();
    const id = router.query.id;
    const {data: article, isLoading, error} = useGetSingleArticleByIDQuery(
        typeof id === "string" ? id : skipToken
    )

    if (isLoading) return <Loading/>
    if (error) return <Error error={error}/>

    return (
        <MainLayout title='Authorization | article' content='Single article'>
            <h1 className='title'>{article?.title}</h1>
            <div className="description mt-4">
                {article?.description}
            </div>
            <Row className="comments mt-4">
                <Col md={8} lg={6}>
                    {
                        article?.comments.map(comment =>
                            <Card key={comment._id} className='card shadow-0 border'>
                                <div className="border border-3 border-primary"></div>
                                <Card.Body>
                                    <p>{comment.text}</p>
                                    <div className="d-flex justify-content-between">
                                        <div className="d-flex flex-row align-items-center">
                                            <p className="small mb-0 ms-2">{comment.username}</p>
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            <p className="small text-muted mb-0">Upvote?</p>
                                            <i className="far fa-thumbs-up mx-2 fa-xs text-black"
                                               style={{marginTop: '-0.16rem'}}></i>
                                            <p className="small text-muted mb-0">3</p>
                                        </div>
                                    </div>

                                </Card.Body>
                            </Card>
                        )
                    }
                </Col>
            </Row>
        </MainLayout>
    );
};

export default Article;

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const id = context.params?.id;

        if (typeof id === "string") {
            store.dispatch(getSingleArticleByID.initiate(id));
        }

        await Promise.all(store.dispatch(getRunningQueriesThunk()));

        return {
            props: {},
        };
    }
);