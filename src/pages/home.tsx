import React, {useState} from 'react';
import MainLayout from "../MainLayout";
import {NextThunkDispatch, wrapper} from "../store/store";
import {GetServerSideProps} from "next";
import dynamic from "next/dynamic";
import {getNews} from "../store/actions/news.action";
import {useApiSelector} from "../store/hoock";
import {Col, Row} from "react-bootstrap";
import Image from 'next/image'
import Paginations from "../components/Paginations";
import {INews} from "../types";
import News from "../components/News";
import {useRouter} from "next/router";


const Loading = dynamic(() => import('../components/Loading'))
const Error = dynamic(() => import('../components/Error'))


const Home = () => {
    const router = useRouter()
    const [postsPerPage] = useState<number>(12);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const {news, isLoading, error} = useApiSelector(state => state.news);
    const data: INews[] = news?.slice(3)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentNews: INews[] = data.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);


    return (
        <MainLayout title="Authorization | main page" content='Main page'>

            <div className="wrapper"><h1 className='title text-white'>World news</h1></div>
            {
                isLoading ? <Loading/> :
                error ? <Error error={error}/> :
                data && (
                    <>
                        <div className="banner_background"></div>
                        <Col xs={12} md={8} lg={9} className="float-left pb-3 pb-md-5 pb-lg-5">
                            <div style={{position: 'relative', height: '600px', marginBottom: '10px', border: '4px solid white'}}>
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

                            <h2 className="news-main-title" onClick={() => router.push(`/news/` + news[0].title.replace(/ /g, "_"))}>{news[0].title}</h2>

                        </Col>
                        <Col xs={12} md={4} lg={3} className="float-left pb-3 pb-md-5 pb-lg-5">
                            <div style={{position: 'relative', height: '300px'}}>
                                <Image
                                    alt={news[1].title}
                                    src={news[1].urlToImage}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    style={{
                                        objectFit: 'cover', border: '4px solid white'
                                    }}
                                />
                            </div>
                            <h5 className="news-main-sub-title first" onClick={() => router.push(`/news/` + news[1].title.replace(/ /g, "_"))}>{news[1].title}</h5>
                            <div style={{position: 'relative', height: '224px'}}>
                                <Image
                                    alt={news[2].title}
                                    src={news[2].urlToImage}
                                    fill
                                    sizes="(min-width: 808px) 50vw, 100vw"
                                    style={{
                                        objectFit: 'cover',  border: '4px solid white'
                                    }}
                                />
                            </div>
                            <h5 className="news-main-sub-title" onClick={() => router.push(`/news/` + news[2].title.replace(/ /g, "_"))}>{news[2].title}</h5>
                        </Col>

                        <h3>Other actuality news</h3>
                        <hr/>

                        {
                            currentNews && <News currentNews={currentNews}/>
                        }

                        {(data?.length > postsPerPage) && <Paginations
                            newsPerPage={postsPerPage}
                            totalNews={data.length}
                            currentPage={currentPage}
                            paginate={paginate}/>
                        }
                    </>
                )
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