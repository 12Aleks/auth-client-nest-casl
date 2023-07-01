import React from 'react';
import MainLayout from "../MainLayout";
import {NextThunkDispatch, wrapper} from "../store/store";
import {GetServerSideProps} from "next";
import {getNews} from "../store/actions/news.action";
import {useApiSelector} from "../store/hoock";
import {INews} from "../types";


const Home = () => {
   const {news, isLoading, error} = useApiSelector(state => state.news)
    console.log(news)


    return (
        <MainLayout title="Authorization | main page"  content='Main page'>
            <h1 className='title'>Main page</h1>
            {
                news && news.map((el) =>
                   <p key={el.title}>{el.title}</p>
                )
            }
        </MainLayout>
    );
};

export default Home;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) =>
    async() => {
        const dispatch: NextThunkDispatch = store.dispatch as NextThunkDispatch;
        await dispatch(await getNews())
        return {props: {}}
    }
)