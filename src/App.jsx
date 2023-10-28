

import './App.css'
import Body from './main/Body'
import Layout from './main/Layout';
import About from './main/About';
import Missing from './main/Missing';
import NewPost from './main/NewPost';
import DisplayPost from './main/DisplayPost';
import EditPost from './main/EditPost';
import { format } from 'date-fns';
import { useEffect, useState } from 'react'
import api from './api/posts'
import { Route, Routes, useNavigate } from 'react-router-dom';
import useWindowSize from './hooks/useWindowSize';
import useAxiosFetch from './hooks/useAxiosFetch';



function App() {
  const [posts, setPosts] = useState([])
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const Navigate = useNavigate();
  const {width} = useWindowSize

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data)
  },[data])

  useEffect(() => {
    const filtered = posts.filter(post => ((post.title).toLowerCase()).includes(search.toLowerCase()) ||  ((post.body).toLowerCase()).includes(search.toLowerCase()))
    setSearchResult(filtered.reverse());
  }, [posts, search])

  const submitFun = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newpost = {id, title: postTitle, datetime, body: postBody};
    try {
      const response = await api.post('/posts', newpost)
      const mergePost = [...posts, response.data];
      setPosts(mergePost);
      setPostTitle('');
      setPostBody('');
      return Navigate('/');
    } catch (error) {
      console.log(error.message);
    }
    
  }

  const editFun = async(id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatepost = {id, title: editTitle, datetime, body: editBody};
    try {
      const response = await api.put(`/posts/${id}`, updatepost);
      setPosts(posts.map(post => post.id === id ? { ...response.data} : post));
      setEditTitle('');
      setEditBody('');
      return Navigate(`/post/${id}`);
    } catch (error) {
      console.log(error.message);  
    }
    
  }

  const delFun = async (id) => {
    try {
      await api.delete(`/posts/${id}`)
      const postlist = posts.filter(post => post.id !== id);
      setPosts(postlist);
      return Navigate('/')
    } catch (error) {
      console.log(error.message);
    }
   
  }

  return (
      <Routes>
        <Route path='/' element={<Layout search={search} setSearch={setSearch} width={width} />}>
          <Route index element={<Body posts={searchResult} fetchError={fetchError} isLoading={isLoading} />} />
          <Route path='/post'>
            <Route index element={<NewPost submit={submitFun} postTitle={postTitle} setPostTitle={setPostTitle} postBody={postBody} setPostBody={setPostBody}/>}/>
            <Route path='/post/:id'>
              <Route index element={<DisplayPost posts={posts} deletepost={delFun}  />} />
              <Route path="/post/:id/edit" element={<EditPost posts={posts} editTitle={editTitle} editBody={editBody} setEditTitle={setEditTitle} setEditBody={setEditBody} edit={editFun}/>} />
            </Route>
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
  )
}

export default App
