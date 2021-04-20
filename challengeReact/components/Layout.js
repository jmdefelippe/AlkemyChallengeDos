import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    
    const title = "Alkemy Challenge JS";
    
    return ( 
        <>
            <Head>
                <title>{title}</title>
                <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
            </Head>

            <Header />
            <div className="bg-gray-200 min-h-screen">
                <div className="container mx-auto">
                    
                    <main className="pt-10">
                        {children}
                    </main>

                </div>
            </div>
            
            <Footer
                title={title}
            />
        </>
     );
}
 
export default Layout;