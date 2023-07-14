import {memo} from 'react';
import dynamic from "next/dynamic";
import CardComponent from "./CardComponent";
import {INews} from "../types";

const Loader = dynamic(() => import('../components/Loading'))

interface NewsProps {
    currentNews: INews[]
}

const News = ({currentNews}: NewsProps) => {

    if(!currentNews) return <Loader/>

    return (
        <>
            {
                currentNews.map((el) => <CardComponent key={el.title} payload={el} classComponent='news' />)
            }
        </>
    );
};

export default memo(News);