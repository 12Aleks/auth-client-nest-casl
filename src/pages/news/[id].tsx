import {wrapper} from "../../store/store";
import axios from "axios";
import {IArticle} from "../../types";
import {FC, useState} from "react";
import MainLayout from "../../MainLayout";
import dynamic from "next/dynamic";
import {GetServerSideProps} from "next";

const Loading = dynamic(() => import('../../components/Loading'))

const SingleNews:FC<IArticle> = (article ) => {


    return (
        <MainLayout title='Authorization | news' content='News article'>
            {
                !article ? <Loading/> : <>
                    <h1 className='title'>{article?.title}</h1>
                </>
            }

        </MainLayout>
    )
}

export default SingleNews

const API_KEY = process.env.NEXT_PUBLIC_API_KEY
export const getServerSideProps:GetServerSideProps<IArticle> = wrapper.getServerSideProps(
    (store) => async (context) => {
        const id:string = await context.params?.id as string;
        const result:string =  await id?.replace(/_/g, " ")
        console.log('Result',result)
        const {data} = await axios.get(`https://newsapi.org/v2/everything?q=${result}&domains=lifehacker.com&apiKey=${API_KEY}`);
        console.log('Data articles',data.articles)
        const singleArticle: IArticle =  data?.articles?.find((a: { title: string | string[] | undefined; }) => a.title === result)

        return {
            props: singleArticle
        };

})