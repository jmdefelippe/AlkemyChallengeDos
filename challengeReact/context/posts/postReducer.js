import {
    GET_POSTS,
    GET_POST,
    CREATE_POST,
    POST_OK,
    HIDE_ALERT,
    POST_ERROR,
    SELECT_POST,
    DELETE_POST,
    UPDATE_POST
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case GET_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case GET_POST:
            return {
                ...state,
                post: action.payload
            }
        case CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                formulario: false,
                errorformulario: false
            }
        case SELECT_POST:
            return {
                ...state,
                post: state.posts.filter(post => post.id ===
                action.payload)
            }
        case UPDATE_POST:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id
                ? action.payload : post)
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !==
                action.payload),
                post: null,
            }
        case HIDE_ALERT:
            return {
                ...state,
                message: {}
            } 
        case POST_OK:
        case POST_ERROR:
            return {
                ...state,
                message: action.payload
            }
        default:
            return state;
    }
}