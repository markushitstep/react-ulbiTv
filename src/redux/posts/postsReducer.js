import { CONST } from "./postsAction";

let initialState = {
    posts: [],
    isPostsLoading: false,
    totalPosts: 0,
    currentPage: 1,
}

const postsReducer = (state = initialState, action) => {

    switch (action.type) {
        case CONST.SET_POSTS: {
            return {
                ...state,
                posts: [...state.posts, ...action.payload],
                // isPostsLoading: false
            }
        }
        case CONST.SET_POSTS_LOADING: {
            return {
                ...state,
                isPostsLoading: action.payload
            }
        }
        case CONST.SET_POSTS_TOTAL: {
            return {
                ...state,
                totalPosts: action.payload,
                isPostsLoading: false
            }
        }
        case CONST.SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.payload,
                isPostsLoading: false
            }
        }
        default: return state;
    }
}

export default postsReducer;
