import React from 'react';
import MainLayout from "../MainLayout";
import {NextThunkDispatch, wrapper} from "../store/store";
import { GetServerSideProps } from "next";
import axios from "axios";

interface IArticle{
    _id: string
    title: string,
    description: string,
    comments: Array<string>,
    __v: number

}
const Articles = (serverQuestions:IArticle) => {
    return (
        <MainLayout title='articles' content={'Articles subpage'}>
            <h1 className='title'>Articles</h1>
            {
                <p>{JSON.stringify(serverQuestions)}</p>
            }
        </MainLayout>
    );
};

export default Articles;

export const getServerSideProps:GetServerSideProps = async () => {
    const response = await axios.get(`http://localhost:5000/articles/`);
    return {
        props: {
            serverQuestions: response.data
        }
    }
}