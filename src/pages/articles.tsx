import React from 'react';
import MainLayout from "../MainLayout";
import {NextThunkDispatch, wrapper} from "../store/store";
import {GetServerSideProps} from "next";
import {getRunningQueriesThunk, useGetAllArticlesQuery} from "../store/api/api.slice";
import CardComponent from "../components/CardComponent";
import Loading from "../components/Loading";
import Error from "../components/Error";


const Articles = () => {
    const {data: articles, error, isLoading} = useGetAllArticlesQuery()

    if (isLoading) return <Loading/>

    if (error) return <Error error={error}/>


    return (
        <MainLayout title='Authorization | articles' content={'Articles subpage'}>
            <h1 className='title'>Articles</h1>
            { articles && articles.map(article =>
                  <CardComponent key={article._id} payload={article}/>
                )
            }
        </MainLayout>
    );
};

export default Articles;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) =>
    async () => {
        const dispatch: NextThunkDispatch = store.dispatch as NextThunkDispatch
        await Promise.all(dispatch(getRunningQueriesThunk()));
        return {props: {}}
    }
)