import React from 'react';

const Banner = ({ children }) => {
    return (
        <div className='pt-32 pb-32 text-3xl font-extrabold'>
            <h1>{children}</h1>
        </div>
    );
};

export default Banner;