import React from 'react';

const Footer = ({ title }) => {

    const year = new Date().getFullYear();
    
    return ( 
        <footer className="grid grid-cols-1 text-center py-4 bg-blue-500">
            <p className="text-white text-sm">{title} | {year}</p>
            <p className="text-white text-sm">Joan Manuel Defelippe</p>
        </footer>
     );
}
 
export default Footer;