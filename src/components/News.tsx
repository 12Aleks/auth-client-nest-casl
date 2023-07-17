import {memo} from 'react';
import CardComponent from "./CardComponent";
import {INews} from "../types";

interface NewsProps {
    currentNews: INews[]
}

const News = ({currentNews}: NewsProps) => {

    return (
        <>
            {
                currentNews.map((el:INews, index: number) => <CardComponent key={el.title + index} payload={el} classComponent='news' />)
            }
        </>
    );
};

export default memo(News);