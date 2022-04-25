import React from 'react'
import { useDispatch } from 'react-redux';
import { changePage } from '../../../redux/posts/postsThunk';
import { getPagesArray } from '../../../utils/pages';

const Pagination = ({totalPages, currentPage}) => {
    let pagesArray = getPagesArray(totalPages);
    const dispatch = useDispatch();

    const onChangePage = (page) => {
        dispatch(changePage(page))
    }
    
    return (
        <div className='page__wrapper'>
            {pagesArray.map( p => 
                <span 
                    onClick={() => onChangePage(p)}
                    key={p} 
                    className={currentPage === p ? 'page page__current' : 'page'}
                >
                    {p}
                </span>  
            )}
      </div> 
    )
}

export default Pagination;