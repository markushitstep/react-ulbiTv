import React from 'react'
import PostItem from './PostItem'

const PostList = ({posts, title, remove}) => {

    if(!posts.length){
        return (
            <h2>Посты не найдены!</h2>
        )
    }
    return (
        <div>
            <div className="App">
            <h1>{title}</h1>
            {posts.map((post, index) => 
                <PostItem remove={remove} number={index + 1} post={post} key={post.id}/>
            )}
            </div>
        </div>
    )
}

export default PostList;