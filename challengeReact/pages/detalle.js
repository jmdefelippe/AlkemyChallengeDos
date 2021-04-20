import React, { useContext } from 'react';

import DetallePost from '../components/DetallePost';
import Layout from '../components/Layout';

import postContext from '../context/posts/postContext';

const Detalle = () => {

    const postsContext = useContext(postContext);
    const { posts, post } = postsContext;

    return (  
        <Layout>
            <div className="md:w-4/5 xl:w-3/5 mx-auto">
                { (posts.length === 0) ?
                    (<p className="text-2xl font-sans font-bold text-blue-500 text-center my-4">Ningún Post Seleccionado</p>
                    ) : (  
                        <div>
                            <h2 className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-blue-500 text-center my-4">Detalles Del Post</h2>
                            <DetallePost post={post} />
                        </div>                    
                    )
                }
            </div>
        </Layout>
    );
}
 
export default Detalle;