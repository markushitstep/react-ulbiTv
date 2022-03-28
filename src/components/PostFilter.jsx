import React from 'react'
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';


const PostFilter = ({filter, setFilter}) =>{


    return (
        <div>
        <MyInput 
          value={filter.query}
          onChange={event => setFilter({...filter, query: event.target.value})}
          placeholder='Search...'
        />
        <MySelect  
          value={filter.sort}
          onChange={sort => setFilter({...filter, sort})}
          defaultValue='Сортировка'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
    )
}

export default PostFilter;
