export const CONST = {
    SET_POSTS: 'SET_POSTS',
    SET_POSTS_LOADING: 'SET_POSTS_LOADING',
    SET_POSTS_TOTAL: 'SET_POSTS_TOTAL',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
}

export const setPosts = (payload) => ({ type: CONST.SET_POSTS, payload});
export const setPostsLoading = (payload) => ({ type: CONST.SET_POSTS_LOADING, payload});
export const setTotalPosts = (payload) => ({ type: CONST.SET_POSTS_TOTAL, payload});
export const setCurrentPage = (payload) => ({ type : CONST.SET_CURRENT_PAGE, payload});
