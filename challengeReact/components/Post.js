import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Swal from 'sweetalert2';

import postContext from '../context/posts/postContext';

const Post = ({ post }) => {

    const router = useRouter();

    const postsContext = useContext(postContext);
    const { getPost, selectPost, deletePost } = postsContext;

    const { id, title } = post;
 
    const detailsPost = id => {
        getPost(id);
        router.push('/detalle');
    }

    const updatePost = post => {
        selectPost(post);
        router.push('/editarpost');
    }

    const confirmDeletePost = id => {
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
                deletePost(id);
            }
        })
    }

    return (
        <div className="flex flex-wrap my-2 items-center border-b-2 py-2 border-blue-500 ">
            <p className="flex-1 text-sm lg:text-base">{title}</p>
            
            <img 
                className="w-6 mr-5 cursor-pointer" src="/detalles.png"
                onClick={ () => detailsPost(id) }
            />

            <img 
                className="w-6 mr-5 cursor-pointer" src="/editar.png"
                onClick={ () => updatePost(id) }
            />

            <img 
                className="w-6 cursor-pointer" src="/eliminar.png"
                //onClick={() => eliminar() }
                onClick={() => confirmDeletePost(id)}
            />

        </div>
    );
}

export default Post;