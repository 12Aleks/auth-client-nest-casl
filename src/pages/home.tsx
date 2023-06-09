import React, {useCallback, useState} from 'react';
import MainLayout from "../MainLayout";
import {NextThunkDispatch, wrapper} from "../store/store";
import {GetServerSideProps} from "next";
import dynamic from "next/dynamic";
import {getNews} from "../store/actions/news.action";
import {useApiSelector} from "../store/hoock";
import CardComponent from "../components/CardComponent";
import {Col, Row} from "react-bootstrap";
import Image from 'next/image'
import Paginations from "../components/Paginations";
import {INews} from "../types";
import News from "../components/News";

const Loading = dynamic(() => import('../components/Loading'))
const Error = dynamic(() => import('../components/Error'))


const Home = () => {
    const [postsPerPage] = useState<number>(12);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {news, isLoading, error} = useApiSelector(state => state.news);

    const data = news.slice(3)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentNews: INews[] = data.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


    if (isLoading) return <Loading/>
    if (error) return <Error error={error}/>

    return (
        <MainLayout title="Authorization | main page" content='Main page'>

            <h1 className='title'>nextAuth news</h1>

            <Col xs={12} md={8} lg={9} className="float-left pb-3 pb-md-5 pb-lg-5">
                <div style={{position: 'relative', height: '600px', marginBottom: '10px'}}>
                    <Image
                        alt={news[0].title}
                        src={news[0].urlToImage}
                        fill
                        sizes="(min-width: 808px) 50vw, 100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>

                <h2 className="news-main-title">{news[0].title}</h2>

            </Col>
            <Col xs={12} md={4} lg={3} className="float-left pb-3 pb-md-5 pb-lg-5">
                <div style={{position: 'relative', height: '320px'}}>
                    <Image
                        alt={news[1].title}
                        src={news[1].urlToImage}
                        fill
                        sizes="(min-width: 808px) 50vw, 100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>

                <h5>{news[1].title}</h5>

                <div style={{position: 'relative', height: '200px'}}>
                    <Image
                        alt={news[2].title}
                        src={news[2].urlToImage}
                        fill
                        sizes="(min-width: 808px) 50vw, 100vw"
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>

                <h5>{news[2].title}</h5>
            </Col>

            <h3>Other actuality news</h3>
            <hr/>

            {
                currentNews && <News currentNews={currentNews}/>
            }

            {(news?.length > postsPerPage) && <Paginations
                newsPerPage={postsPerPage}
                totalNews={news.length}
                paginate={paginate}/>
            }
        </MainLayout>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) =>
    async () => {
        const dispatch: NextThunkDispatch = store.dispatch as NextThunkDispatch;
        await dispatch(await getNews())
        return {props: {}}
    }
)