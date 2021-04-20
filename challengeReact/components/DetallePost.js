import React from 'react';

const DetallePost = ({ post }) => {
    
    const { userId, id, title, body } = post;
    
    return (
        <div>
            <div className="my-2 items-center border-b-2 py-2 bg-gray-300 px-5 rounded-lg">
                <p className="flex-1 text-sm lg:text-base font-bold mb-2">userId: <span className="font-normal text-black">{userId}</span></p>
                <p className="flex-1 text-sm lg:text-base font-bold mb-2">id: <span className="font-normal text-black">{id}</span></p>
                <p className="flex-1 text-sm lg:text-base font-bold mb-2">title: <span className="font-normal text-black">{title}</span></p>
                <p className="flex-1 text-sm lg:text-base font-bold mb-2">body: <span className="font-normal text-black">{body}</span></p>
            </div>                    
        </div>         
    );
}
 
export default DetallePost;