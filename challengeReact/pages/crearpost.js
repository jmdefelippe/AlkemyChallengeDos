import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';

import * as Yup from 'yup';
import Swal from 'sweetalert2';

import Alerta from '../components/Alerta';
import Layout from '../components/Layout';

import postContext from '../context/posts/postContext';

const CrearPost = () => {
  
  // Next router
  const router = useRouter();

  const PostContext = useContext(postContext);
  const { mensaje, agregarPost } = PostContext;

  useEffect(() => {
   
    if (mensaje.categoria === 'alerta-ok') {
      router.push('/');
    }
      
    // eslint-disable-next-line
  }, [mensaje]);

  // Formulario y validación con formik y Yup
  const formik = useFormik({
      initialValues: {
        title: '',
        body: ''
      },
      validationSchema: Yup.object({
            title: Yup.string()
                .required('Title required'),
            body: Yup.string()
                .required('Body required')
      }),
      onSubmit: valores => {
          agregarPost(valores);
      }
  });


  return (
    <Layout>
        <div className="md:w-4/5 xl:w-3/5 mx-auto">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-sans font-bold text-blue-500 text-center my-4">Crear Post</h2>

          <div className="flex justify-center mt-5">
              <div className="w-full max-w-lg">
                  <form
                    className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-20"
                    onSubmit={formik.handleSubmit}
                  >
                      <div className="mb-4">
                          <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="title"
                          >Title</label>
                          <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="title"
                              placeholder="Title"
                              value={formik.values.title}
                              onChange={formik.handleChange}
                          />

                          { formik.touched.title && formik.errors.title ? (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.title} </p>
                            </div>
                          ) : null }
                      </div>

                      <div className="mb-4">
                          <label 
                            className="block text-black text-sm font-bold mb-2"
                            htmlFor="body"
                          >Body</label>
                          <input
                              type="text"
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              id="body"
                              placeholder="Body"
                              value={formik.values.body}
                              onChange={formik.handleChange}
                          />

                          { formik.touched.body && formik.errors.body ? (
                            <div className="my-2 bg-gray-200 border-l-4 border-red-500 text-red-700 p-4">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.body} </p>
                            </div>
                          ) : null }
                      </div>

                      
                      <input 
                        type="submit"
                        className="bg-blue-400 hover:bg-gray-900 w-full p-2 text-white uppercase font-bold"
                        value="Crear Post"
                      />

                      { (mensaje.categoria === 'alerta-error') && <Alerta msg={mensaje.msg} categoria={mensaje.categoria} /> }

                  </form>
              </div>
          </div>
        </div>
    </Layout>
   );
}
 
export default CrearPost;