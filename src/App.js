import React, { useMemo, useState } from 'react'
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyModal from './components/UI/modal/MyModal';
import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "aa", body: "cc" },
    {id: 2, title: "bb", body: "bb" },
    {id: 3, title: "cc", body: "aa" }
  ]);

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if(filter.sort) {
      return [...posts].sort( (a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo( () => {
    return sortedPosts.filter(post => post.title.includes(filter.query))
  }, [filter.query, sortedPosts])

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
      <PostList 
        remove={removePost} 
        posts={sortedAndSearchedPosts} 
        title='Посты по JS'
      /> 
    </div>
  );
}

export default App;
