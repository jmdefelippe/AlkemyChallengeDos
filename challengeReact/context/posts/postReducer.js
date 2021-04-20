import {
    OBTENER_POSTS,
    OBTENER_POST,
    AGREGAR_POST,
    POST_EXITOSO,
    OCULTAR_ALERTA,
    POST_ERROR,
    POST_ACTUAL,
    ELIMINAR_POST,
    ACTUALIZAR_POST
} from '../../types';

export default (state, action) => {
    switch(action.type) {
        case OBTENER_POSTS:
            return {
                ...state,
                posts: action.payload
            }
        case OBTENER_POST:
            return {
                ...state,
                post: action.payload
            }
        case AGREGAR_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
                formulario: false,
                errorformulario: false
            }
        case POST_ACTUAL:
            return {
                ...state,
                post: state.posts.filter(post => post.id ===
                action.payload)
            }
        case ACTUALIZAR_POST:
            return {
                ...state,
                posts: state.posts.map(post => post.id === action.payload.id
                ? action.payload : post)
            }
        case ELIMINAR_POST:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !==
                action.payload),
                post: null,
                alerta: action.payload
            }
        case OCULTAR_ALERTA:
            return {
                ...state,
                mensaje: {}
            } 
        case POST_EXITOSO:
        case POST_ERROR:
            return {
                ...state,
                mensaje: action.payload
            }
        default:
            return state;
    }
}