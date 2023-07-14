import React, {memo} from 'react';
import Pagination from 'react-bootstrap/Pagination';
interface IPaginationProps{
    newsPerPage: number,
    totalNews: number,
    paginate: (pageNumber: number) => void
}

const Paginations = ({ newsPerPage, totalNews, paginate } : IPaginationProps) => {
    const pageNumbers: number[] = [];

    for (let i: number = 1; i <= Math.ceil(totalNews / newsPerPage); i++) {
        pageNumbers.push(i);
    }


    return (
        <nav className="mt-3 mb-5 d-flex justify-content-center">
            <ul className='pagination '>
                {pageNumbers?.map(n => (
                    <li key={n} className='page-item'>
                        <span onClick={() => paginate(n)} className='page-link'>
                            {n}
                        </span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default memo(Paginations);