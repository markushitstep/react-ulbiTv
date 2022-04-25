import React, { useEffect } from 'react'
import NewPosts from './NewPosts';
import {getPosts} from '../../redux/posts/postsThunk'
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react';
import { useState } from 'react';
import { useObserver } from '../../hooks/useObserver';


const NewPostsComponent = () => {
    const {posts, isPostsLoading, totalPage, currentPage} = useSelector((state) => state.posts);
    const [page, setPage] = useState(currentPage);
    const dispatch = useDispatch();
    const lastPost = useRef();

    useObserver(lastPost, page < totalPage, isPostsLoading, () =>{
        setPage( page + 1);
    });
    
    const getAllPosts = (page) => { 
        dispatch(getPosts(page));
    }

    useEffect(() => {
        getAllPosts(page);
    }, [page]);


    return (
        <div>
            <NewPosts 
                posts={posts} 
                totalPage={totalPage}
                isPostsLoading={isPostsLoading}
                currentPage={currentPage}
                lastPost={lastPost}
            />
        </div>
    )
}

export default NewPostsComponent;
