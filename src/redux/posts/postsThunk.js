import PostService from "../../api/PostService"
import { getPageCount } from "../../utils/pages";
import { setCurrentPage, setPosts, setPostsLoading, setTotalPage } from "./postsAction";


export const getPosts = (page = 1, limit = 10) => async(dispatch) =>{
    try {
        dispatch(setPostsLoading(true));
        const {data, headers} = await PostService.getAll(page, limit);
        const totalCount = headers['x-total-count'];
        dispatch(setPosts({data}));
        dispatch(setCurrentPage(page));
        dispatch(setTotalPage(getPageCount(totalCount, limit)));
        dispatch(setPostsLoading(false));
    } catch (error) {
        console.log(error);
    }
}
