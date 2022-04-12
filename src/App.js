import React, { useEffect, useState } from 'react'
import PostService from './api/PostService';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyLoader from './components/UI/loader/MyLoader';
import MyModal from './components/UI/modal/MyModal';
import { usePosts } from './hooks/usePosts';

import './styles/App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const [isPostsLoading, setPostsLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setPostsLoading(true);
      const posts = await PostService.getAll();
      setPosts(posts);
      setPostsLoading(false);
    }

    fetchPosts();
  },[]);


  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setModal(false);
  }

  const removePost = (post) =>{
    setPosts(posts.filter( p => p.id !== post.id ));
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>
        Create post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <hr className='hr'/>  
      <PostFilter 
        filter={filter} 
        setFilter={setFilter}
      />
      {isPostsLoading 
        ? <MyLoader />
        : <PostList 
            remove={removePost} 
            posts={sortedAndSearchedPosts} 
            title='Посты'
          />
      } 
    </div>
  );
}

export default App;
