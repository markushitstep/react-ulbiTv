import React, { useState, useEffect } from 'react'
import PostFilter from '../PostFilter';
import PostList from '../PostList';
import { usePosts } from '../../hooks/usePosts';
import MyLoader from '../UI/loader/MyLoader';
import Pagination from '../UI/pagination/Pagination';
import { useDispatch, useSelector } from 'react-redux';


const NewPosts = ({posts, isPostsLoading, totalPosts, currentPage, lastPost}) => {
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1> New Posts page </h1>
            <PostFilter
                filter={filter} 
                setFilter={setFilter}
            />
            <PostList 
                posts={sortedAndSearchedPosts} 
                title='Посты'
            />
            <div ref={lastPost} style={{height: 20, background: 'red'}} /> 
            {isPostsLoading &&
                <MyLoader />
            }
            <Pagination 
                totalPages={totalPosts}
                currentPage={currentPage}
            />
        </div>
    );
}

export default NewPosts;
