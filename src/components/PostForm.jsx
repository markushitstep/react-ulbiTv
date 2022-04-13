import React, { useState } from 'react'
import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
//import { useRef } from 'react';

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post,
            id: Date.now()
        }
        create(newPost);
        setPost({title: '', body: ''});
    }

     //const intupRef = useRef()
    //console.log(intupRef.current.value)
    return (
        <form>
            {/* управляемый компонент */}
            <MyInput 
            value={post.title}
            onChange={(e) => setPost({...post,title: e.target.value}) }
            type='text' 
            placeholder='Название поста'  
            />
            <MyInput 
            value={post.body}
            onChange={(e) => setPost({...post,body: e.target.value}) }
            type='text' 
            placeholder='Описание поста'
            />

            {/* 
                неуправляемый компонент 
                <input ref={intupRef} type='text'/>  
                <MyInput 
                ref={intupRef}
                type='text' 
                placeholder='Описание поста'
            />  
            */}
            <MyButton onClick={addNewPost}>Создать пост</MyButton>
        </form>
    )
}

export default PostForm;
