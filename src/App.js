import React, { useMemo, useState } from 'react'
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';
import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: "aa", body: "cc" },
    {id: 2, title: "bb", body: "bb" },
    {id: 3, title: "cc", body: "aa" }
  ]);

  const [selectedSort, setSelectedSort] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const sortedPosts = useMemo(() => {
    if(selectedSort) {
      return [...posts].sort( (a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo( () => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery))
  }, [searchQuery, sortedPosts])

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
  }

  const removePost = (post) =>{
    setPosts(posts.filter( p => p.id !== post.id ));
  }

  const sortPosts = (sort) =>{
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr className='hr'/>  
      <div>
        <MyInput 
          value={searchQuery}
          onChange={event => setSearchQuery(event.target.value)}
          placeholder='Search...'
        />
        <MySelect  
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {sortedAndSearchedPosts.length !== 0 
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты по JS'/> 
        : <h2 className='postFound'>Посты не найдены!</h2>
      }
    </div>
  );
}

export default App;
