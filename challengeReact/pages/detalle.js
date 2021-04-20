import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';

import postContext from '../context/posts/postContext';

const Detalle = () => {

    // extraer posts de state inicial
    const postsContext = useContext(postContext);
    const { post } = postsContext;
    const { userId, id, title, body } = post[0];

    return (  
        <Layout>
            <div className="md:w-4/5 xl:w-3/5 mx-auto">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black-500 text-center my-4">Detalles Del Post</h2>

                <div className="my-2 items-center border-b-2 py-2 bg-gray-300 px-5 rounded-lg">
                    <p className="flex-1 text-sm lg:text-base font-bold mb-2">userId: <span className="font-normal">{userId}</span></p>
                    <p className="flex-1 text-sm lg:text-base font-bold mb-2">id: <span className="font-normal">{id}</span></p>
                    <p className="flex-1 text-sm lg:text-base font-bold mb-2">title: <span className="font-normal">{title}</span></p>
                    <p className="flex-1 text-sm lg:text-base font-bold mb-2">body: <span className="font-normal">{body}</span></p>
                </div>


            </div>
        </Layout>
    );
}
 
export default Detalle;