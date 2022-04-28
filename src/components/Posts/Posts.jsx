import React, { useState } from 'react'
import '../../styles/App.css'
import PostFilter from '../PostFilter';
import PostList from '../PostList';
import { usePosts } from '../../hooks/usePosts';
import MyLoader from '../UI/loader/MyLoader';
import Pagination from '../UI/pagination/Pagination';

const Posts = ({posts, totalPage, isPostsLoading, currentPage, lastPost}) => {
    
    const [filter, setFilter] = useState({sort: '', query: ''});
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

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
            <div ref={lastPost} />  
            {isPostsLoading &&
                <MyLoader />
            }
            <Pagination 
                totalPages={totalPage}
                currentPage={currentPage}
            />
        </div>
    );
}

export default Posts;
