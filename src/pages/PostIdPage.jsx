import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../api/PostService';
import MyLoader from '../components/UI/loader/MyLoader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () =>{
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching( async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchComments, isComLoading, comError] = useFetching( async () => {
        const response = await PostService.getCommentsByPostId(params.id);
        setComments(response.data);
    });

    useEffect(() => {
        fetchPostById();
        fetchComments();
    },[]);

    console.log(comments);
    return (
        <div>
            <h1>Вы попали на страницу поста с ID = {params.id}</h1>
            {isLoading 
                ? <MyLoader/>
                : <div>{post.id}. {post.title}</div>
            }
            <h1>
                comments
            </h1>
            {isComLoading
                ? <MyLoader/>
                : <div>
                    {comments.map((comment) => 
                        <div style={{marginTop: 15}}>
                            <h5>{comment.email}</h5>
                            <div>{comment.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    )
}

export default PostIdPage;
