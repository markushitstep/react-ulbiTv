import React, { useEffect } from 'react'
import Posts from './Posts';
import {getPosts} from '../../redux/posts/postsThunk'
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react';
import { useObserver } from '../../hooks/useObserver';
import { setCurrentPage, setEmptyPosts, setTotalPage } from '../../redux/posts/postsAction';


const PostsContainer = () => {
    const {posts, totalPage, isPostsLoading, currentPage} = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const lastPost = useRef();

    useObserver(lastPost, currentPage < totalPage, isPostsLoading,  () =>{
        dispatch(getPosts(currentPage + 1));
    });

    useEffect(() => {
        if (totalPage !== 10) dispatch(getPosts(currentPage));
        
        return () => { 
            dispatch(setEmptyPosts([]));
            dispatch(setTotalPage(0));
            dispatch(setCurrentPage(1));
        }
    }, []);

    return (
        <div>
            <Posts 
                posts={posts} 
                totalPage={totalPage}
                isPostsLoading={isPostsLoading}
                currentPage={currentPage}
                lastPost={lastPost}
            />
        </div>
    )
}

export default PostsContainer;
