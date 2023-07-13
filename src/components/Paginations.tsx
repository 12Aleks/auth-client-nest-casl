import React, {memo} from 'react';
import Pagination from 'react-bootstrap/Pagination';
interface IPaginationProps{

}

const Paginations = (props: IPaginationProps) => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }


    return (
        <Pagination>{items}</Pagination>
    );
};

export default memo(Paginations);