import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../components/Layout';
import ListadoPosts from '../components/ListadoPosts';

import postContext from '../context/posts/postContext';

const Index = () => {

    // routing 
    const router = useRouter();

    // extraer posts de state inicial
    const postsContext = useContext(postContext);
    const { posts } = postsContext;

    return ( 
        <div>
            
            <Layout>
                <div className="md:w-4/5 xl:w-4/5 mx-auto">
                  
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-black-500 text-center my-4"
                  >Listado de Posts
                      
                  </h3>

                  <ListadoPosts />
                
                </div>
            </Layout>
                

        </div>
  );
}
 
export default Index;

    

