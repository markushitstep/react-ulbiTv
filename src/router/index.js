import { Navigate } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/Login";
import PostsContainer from "../components/Posts/PostsContainer";
import PostIdPage from "../pages/PostIdPage";

export const privateRoutes = [
    {path: '/about', component: <About />, exact: true},
    {path: '/posts', component: <PostsContainer />, exact: true},
    {path: '/posts/:id', component: <PostIdPage />, exact: true},
    {path: '*', component: <Navigate to='/posts' />, exact: false}
]

export const publicRoutes = [
    {path: '/login', component: <Login />, exact: true},
    {path: '*', component: <Navigate to='/login' />, exact: false}
]
