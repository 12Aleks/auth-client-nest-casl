import React from 'react';
import dynamic from "next/dynamic";
import {useGetAllArticlesQuery} from "../store/api/api.slice";


const Loading = dynamic(() => import('../components/Loading'))
const Error = dynamic(() => import('../components/Error'))

const ArticleList = () => {
    const {data: articles, error, isLoading} = useGetAllArticlesQuery()

    return (
        <>
            <thead>
            <tr>
                <th>#</th>
                <th>Article title</th>
                <th>Author</th>
                <th>Username</th>
            </tr>
            </thead>
            <tbody>
            {
                isLoading ? <Loading/> :
                    error ? <Error error={error}/> :
                        <>
                            {
                                articles?.map((article, index) =>
                                    <tr key={article._id}>
                                        <td>{index + 1}</td>
                                        <td>{article.title}</td>
                                        <td>{article.author}</td>
                                        <td></td>
                                    </tr>
                                )
                            }
                        </>
            }
            </tbody>
        </>
    );
};

export default ArticleList;

