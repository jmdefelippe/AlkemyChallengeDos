import React, { useReducer } from 'react';

import postContext from './postContext';
import postReducer from './postReducer';
import {
    OBTENER_POSTS,
    OBTENER_POST,
    AGREGAR_POST,
    POST_EXITOSO,
    POST_ERROR,
    OCULTAR_ALERTA,
    POST_ACTUAL,
    ELIMINAR_POST,
    ACTUALIZAR_POST
} from '../../types';

import clienteAxios from '../../config/axios';

const PostState = props => {

    const initialState = {
        posts : [],
        post: [{}],
        mensaje: {}
    }

    const timeOut = 2000;

    // dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(postReducer, initialState);

    // obtener los posts
    const obtenerPosts = async () => {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts`;
            const resultado = await clienteAxios.get(url);
            
            dispatch({
                type: OBTENER_POSTS,
                payload: resultado.data
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: POST_ERROR,
                payload: alerta
            })
        }
    }

    // obtener post por id
    const obtenerPost = async id => {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
            const resultado = await clienteAxios.get(url);
            
            dispatch({
                type: OBTENER_POST,
                payload: resultado.data
            });
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: POST_ERROR,
                payload: alerta
            })
        }
    }
    
    // agregar nueva post
    const agregarPost = async post => {

        try {

            const url = `https://jsonplaceholder.typicode.com/posts`;
            const resultado = await clienteAxios.post(url, post);
            
            const alerta = {
                msg: 'Post agregado exitosamente',
                categoria: 'alerta-ok'
            }
            
            dispatch({
                type: POST_EXITOSO,
                payload: alerta
            })

            // insertar el post en el state
            dispatch({
                type: AGREGAR_POST,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: POST_ERROR,
                payload: alerta
            })
        }

        // Limpia la alerta después de 3 segundos
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, timeOut); 
    }

    // selecciona el post que el usuario dio click
    const postActual = postId => {
        dispatch({
            type: POST_ACTUAL,
            payload: postId
        })
    }

    // edita o modifica una post
    const actualizarPost = async post => {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${post.id}`;
            const resultado = await clienteAxios.put(url, post);

            const alerta = {
                msg: 'Post editado exitosamente',
                categoria: 'alerta-ok'
            }
            
            dispatch({
                type: POST_EXITOSO,
                payload: alerta
            })
            
            dispatch({
                type: ACTUALIZAR_POST,
                payload: resultado.data
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: POST_ERROR,
                payload: alerta
            })
        }

        // Limpia la alerta después de 3 segundos
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, timeOut); 
    }

    // elimina un post
    const eliminarPost = async postId => {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/:${postId}`;

            await clienteAxios.delete(url);
            
            const alerta = {
                msg: 'Post eliminado exitosamente',
                categoria: 'alerta-ok'
            }
            
            dispatch({
                type: POST_EXITOSO,
                payload: alerta
            })

            dispatch({
                type: ELIMINAR_POST,
                payload: postId
            })
                        
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            dispatch({
                type: POST_ERROR,
                payload: alerta
            })
        }

        // Limpia la alerta después de 3 segundos
        setTimeout(() => {
            dispatch({
                type: OCULTAR_ALERTA
            })
        }, timeOut); 
    }

    return (
        <postContext.Provider
            value={{
                posts: state.posts,
                post: state.post,
                mensaje: state.mensaje,
                obtenerPosts,
                obtenerPost,
                agregarPost,
                postActual,
                actualizarPost,
                eliminarPost
            }}
        >
            {props.children}
        </postContext.Provider>
    )
}

export default PostState;