import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';

import postContext from '../context/posts/postContext';

const Detalle = () => {

    // extraer posts de state inicial
    const postsContext = useContext(postContext);
    const { posts, post } = postsContext;
    const { userId, id, title, body } = post;

    return (  
        <Layout>
            <div className="md:w-4/5 xl:w-3/5 mx-auto">

            { (posts.length === 0) ?
                (<p className="text-2xl font-sans font-bold text-blue-500 text-center my-4">Ningún Post Seleccionado</p>
                ) : (  
<div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-blue-500 text-center my-4">Detalles Del Post</h2>

                    <div className="my-2 items-center border-b-2 py-2 bg-gray-300 px-5 rounded-lg">
                        <p className="flex-1 text-sm lg:text-base font-bold mb-2">userId: <span className="font-normal text-black">{userId}</span></p>
                        <p className="flex-1 text-sm lg:text-base font-bold mb-2">id: <span className="font-normal text-black">{id}</span></p>
                        <p className="flex-1 text-sm lg:text-base font-bold mb-2">title: <span className="font-normal text-black">{title}</span></p>
                        <p className="flex-1 text-sm lg:text-base font-bold mb-2">body: <span className="font-normal text-black">{body}</span></p>
                    </div>                    
</div>                    



                )
            }


                    


            </div>
        </Layout>
    );
}
 
export default Detalle;