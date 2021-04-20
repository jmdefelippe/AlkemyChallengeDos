import React, { useReducer } from 'react';

import postContext from './postContext';
import postReducer from './postReducer';
import {
    GET_POSTS,
    GET_POST,
    CREATE_POST,
    POST_OK,
    POST_ERROR,
    HIDE_ALERT,
    SELECT_POST,
    DELETE_POST,
    UPDATE_POST
} from '../../types';

import clienteAxios from '../../config/axios';

const PostState = props => {

    const initialState = {
        posts : [],
        post: [{}],
        message: {}
    }

    const timeOut = 2000;

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(postReducer, initialState);

    // obtener todos los posts
    const getPosts = async () => {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts`;
            const result = await clienteAxios.get(url);
            
            dispatch({
                type: GET_POSTS,
                payload: result.data
            });
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alert-error'
            }
            dispatch({
                type: POST_ERROR,
                payload: alert
            })
        }
    }

    // obtener post por id
    const getPost = async id => {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
            const result = await clienteAxios.get(url);
            
            dispatch({
                type: GET_POST,
                payload: result.data
            });
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alert-error'
            }
            dispatch({
                type: POST_ERROR,
                payload: alert
            })
        }
    }
    
    // crear nuevo post
    const createPost = async post => {
        try {

            const url = `https://jsonplaceholder.typicode.com/posts`;
            const result = await clienteAxios.post(url, post);
            
            const alert = {
                msg: 'Post agregado exitosamente',
                category: 'alert-ok'
            }
            
            dispatch({
                type: POST_OK,
                payload: alert
            })

            // insertar el post en el state
            dispatch({
                type: CREATE_POST,
                payload: result.data
            })
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alert-error'
            }
            dispatch({
                type: POST_ERROR,
                payload: alert
            })
        }

        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, timeOut); 
    }

    // selecciona el post que el usuario dio click
    const selectPost = postId => {
        dispatch({
            type: SELECT_POST,
            payload: postId
        })
    }

    // edita un post
    const updatePost = async post => {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
            const result = await clienteAxios.put(url, post);

            const alert = {
                msg: 'Post editado exitosamente',
                category: 'alert-ok'
            }
            
            dispatch({
                type: POST_OK,
                payload: alert
            })
            
            dispatch({
                type: UPDATE_POST,
                payload: result.data
            })
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alert-error'
            }
            dispatch({
                type: POST_ERROR,
                payload: alert
            })
        }

        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, timeOut); 
    }

    // elimina un post
    const deletePost = async postId => {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/:${postId}`;

            await clienteAxios.delete(url);
            
            const alert = {
                msg: 'Post eliminado exitosamente',
                category: 'alert-ok'
            }
            
            dispatch({
                type: POST_OK,
                payload: alert
            })

            dispatch({
                type: DELETE_POST,
                payload: postId
            })
                        
        } catch (error) {
            const alert = {
                msg: 'Hubo un error',
                category: 'alert-error'
            }
            dispatch({
                type: POST_ERROR,
                payload: alert
            })
        }

        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, timeOut); 
    }

    return (
        <postContext.Provider
            value={{
                posts: state.posts,
                post: state.post,
                message: state.message,
                getPosts,
                getPost,
                createPost,
                selectPost,
                updatePost,
                deletePost
            }}
        >
            {props.children}
        </postContext.Provider>
    )
}

export default PostState;