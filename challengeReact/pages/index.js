import React, { useContext, useEffect } from 'react';

import Swal from 'sweetalert2';

import Layout from '../components/Layout';
import ListadoPosts from '../components/ListadoPosts';

import postContext from '../context/posts/postContext';

const Index = () => {

    const postsContext = useContext(postContext);
    const { message } = postsContext;

    useEffect(() => {
      
      if (message.category === 'alert-ok') {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: message.msg,
            width: 400,
            timer: 3000,
            confirmButtonColor: '#60A5FA',
            confirmButtonText: 'Ok!',
        })
      }

      if (message.category === 'alert-error') {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: message.msg,
            width: 400,
            timer: 3000,
            confirmButtonColor: '#60A5FA',
            confirmButtonText: 'Ok!',
        })
      }
    
      // eslint-disable-next-line
  }, [message]);

    return ( 
        <div>
            <Layout>
                <div className="md:w-4/5 xl:w-4/5 mx-auto">
                  
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-blue-500 text-center my-4"
                  >Listado de Posts
                      
                  </h3>

                  <ListadoPosts />
                
                </div>
            </Layout>
        </div>
  );
}
 
export default Index;

    

