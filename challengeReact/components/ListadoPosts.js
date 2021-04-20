import React, { useContext, useEffect } from 'react';

import Post from './Post';

import postContext from '../context/posts/postContext';

const ListadoPosts = () => {

    // extraer posts de state inicial
    const postsContext = useContext(postContext);
    const { posts, mensaje, obtenerPosts } = postsContext;

    useEffect(() => {
        obtenerPosts();
        // eslint-disable-next-line
    }, [mensaje]);

    return (
        <div>
            { (posts.length === 0) ?
                (<p className="text-2xl font-sans font-bold text-blue-500 text-center my-4">No hay posts</p>
                ) : (  
                    <div className="bg-gray-300 rounded-lg px-5 py-2">
                        {posts.map(post => 
                            <div key={post._id} className=""> <Post post={post}/></div>
                        )}
                    </div>
                )
            }
        </div>
    );
}
 
export default ListadoPosts;