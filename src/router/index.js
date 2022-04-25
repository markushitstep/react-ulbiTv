import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/Login";
import NewPostsComponent from "../components/NewPosts/NewPostsComponent";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

export const privateRoutes = [
    {path: '/about', component: <About />, exact: true},
    // {path: '/posts', component: <Posts />, exact: true},
    {path: '/posts', component: <NewPostsComponent />, exact: true},
    {path: '/posts/:id', component: <PostIdPage />, exact: true},
    {path: '*', component: <Navigate to='/posts' />, exact: false}
]

export const publicRoutes = [
    {path: '/login', component: <Login />, exact: true},
    {path: '*', component: <Navigate to='/login' />, exact: false}
]
