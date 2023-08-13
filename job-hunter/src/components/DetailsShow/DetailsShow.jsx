import React from 'react';

const DetailsShow = ({ element, str, data }) => {
    return (
        <div className='flex justify-start gap-2'>
            <span className='text-[#7E90FE]'>
                {element}
            </span>
            <p className='font-medium'>
                <span className='font-bold text-black'>{str}</span>
                {data}
            </p>
        </div>
    );
};

export default DetailsShow;