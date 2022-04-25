import PostService from "../../api/PostService"
import { getPageCount } from "../../utils/pages";
import { setCurrentPage, setPosts, setPostsLoading, setTotalPage } from "./postsAction";


export const getPosts = (page = 1, limit = 10) => async(dispatch) =>{
    try {
        dispatch(setPostsLoading(true));
        const response = await PostService.getAll(page, limit);
        dispatch(setPosts(response.data));
        const totalCount = response.headers['x-total-count'];
        dispatch(setTotalPage(getPageCount(totalCount, limit)));
        dispatch(setPostsLoading(false));
    } catch (error) {
        console.log(error);
    }
}

export const changePage = (page = 1, limit = 10) => async(dispatch) =>{
    try {
        dispatch(setPostsLoading(true));
        dispatch(setCurrentPage(page));
        const response = await PostService.getAll(page, limit);
        dispatch(setPosts(response.data));
    } catch (error) {
        console.log(error);
    }   finally {
        dispatch(setPostsLoading(false));
    }
}