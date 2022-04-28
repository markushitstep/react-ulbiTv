export const CONST = {
    SET_POSTS: 'SET_POSTS',
    SET_EMPTY_POSTS: 'SET_EMPTY_POSTS',
    SET_POSTS_LOADING: 'SET_POSTS_LOADING',
    SET_TOTAL_PAGE: 'SET_TOTAL_PAGE',
    SET_CURRENT_PAGE: 'SET_CURRENT_PAGE'
}

export const setPosts = (payload) => ({ type: CONST.SET_POSTS, payload});
export const setEmptyPosts = (payload) => ({ type: CONST.SET_EMPTY_POSTS, payload});
export const setPostsLoading = (payload) => ({ type: CONST.SET_POSTS_LOADING, payload});
export const setTotalPage = (payload) => ({ type: CONST.SET_TOTAL_PAGE, payload});
export const setCurrentPage = (payload) => ({ type : CONST.SET_CURRENT_PAGE, payload});
