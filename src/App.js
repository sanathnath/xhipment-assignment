import axios from 'axios';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Authentication from './components/Login';
import Header from './components/Header';
import { PostState } from './contexts/PostContext';
import { UserState } from './contexts/UserContext';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import AccountPage from './pages/AccountPage';
import PrivateRoutes from './PrivateRoutes';
import CreatePostPage from './pages/CreatePostPage';

function App() {
  const { setUser } = UserState();
  const { setPost } = PostState();

  useEffect(()=>{
    setUser(window.localStorage.getItem("user"))
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
      setPost(res.data);
    });
  },[])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/login' element={<AuthPage />} />
          <Route element={<PrivateRoutes />}>
            <Route path='/my-account' element={<AccountPage />} />
            <Route path='/create-post' element={<CreatePostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
