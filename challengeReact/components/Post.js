import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Swal from 'sweetalert2';

import postContext from '../context/posts/postContext';

const Post = ({ post }) => {

    // Next router
    const router = useRouter();

    // obtener la función del context de posts
    const postsContext = useContext(postContext);
    const { obtenerPost, postActual, eliminarPost } = postsContext;

    const { id, title } = post;
 
    const detallesPost = id => {
        obtenerPost(id);
        router.push('/detalle');
    }

    const editarPost = post => {
        postActual(post);
        router.push('/editarpost');
    }

    // confirmar si desea eliminarlo
    const confirmarEliminarPost = id => {
        // preguntar al usuario
        Swal.fire({
            title: 'Estás seguro?',
            text: "Un post que se elimina no se puede recuperar",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#60A5FA',
            cancelButtonColor: '#000000',
            confirmButtonText: 'Sí, eliminar!',
            cancelButtonText: 'Cancelar',
            width: 400,
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }

        }).then((result) => {
            if (result.isConfirmed) {
                eliminarPost(id);
            }
        })
    }

    return (
        <div className="flex flex-wrap my-2 items-center border-b-2 py-2 border-blue-500 ">
            <p className="flex-1 text-sm lg:text-base">{title}</p>
            
            <img 
                className="w-6 mr-5 cursor-pointer" src="/detalles.png"
                onClick={ () => detallesPost(id) }
            />

            <img 
                className="w-6 mr-5 cursor-pointer" src="/editar.png"
                onClick={ () => editarPost(id) }
            />

            <img 
                className="w-6 cursor-pointer" src="/eliminar.png"
                //onClick={() => eliminar() }
                onClick={() => confirmarEliminarPost(id)}
            />

        </div>
    );
}

export default Post;