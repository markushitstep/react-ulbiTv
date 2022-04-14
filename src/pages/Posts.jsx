import React, { useEffect, useState } from 'react'
import PostService from '../api/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import MyButton from '../components/UI/button/MyButton';
import MyLoader from '../components/UI/loader/MyLoader';
import MyModal from '../components/UI/modal/MyModal';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount } from '../utils/pages'
import '../styles/App.css'
import Pagination from '../components/UI/pagination/Pagination'
import { useRef } from 'react';
import { useObserver } from '../hooks/useObserver';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
  const lastPost = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts( [...posts, ...response.data]);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit));
  });
  
  useObserver(lastPost, page < totalPages, isPostsLoading, () => {
    setPage( page + 1);
  });
  // useEffect(() => {
  //   if(isPostsLoading) return;
  //   if(observer.current) observer.current.disconnect();
  //   let callback = function(entries, observer) {
  //     if(entries[0].isIntersecting && page < totalPages) {
  //       setPage( page + 1);
  //     }
  //   };
  //   observer.current = new IntersectionObserver(callback);
  //   observer.current.observe(lastPost.current);
  // }, [isPostsLoading]);

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
    setModal(false);
  }

  const removePost = (post) =>{
    setPosts(posts.filter( p => p.id !== post.id ));
  }

  const changePage = (page) => {
    setPage(page);
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
      {postError &&
        <h1>Произошла ошибка {postError}</h1>
      }
      <PostList 
        remove={removePost} 
        posts={sortedAndSearchedPosts} 
        title='Посты'
      />
      <div ref={lastPost} style={{height: 20, background: 'red'}} /> 
      {isPostsLoading &&
         <MyLoader />
      }
      <Pagination 
        totalPages={totalPages}
        page={page}
        changePage={changePage}
      />
    </div>
  );
}

export default Posts;
