import React from 'react';

import '../index.css';

import PostState from '../context/posts/postState';

const MyApp = ({ Component, pageProps }) => {
    return (
        <PostState>
            <Component {...pageProps} />
        </PostState>
    )
}
export default MyApp;