import React from 'react';
import person from '../images/All Images/person.png'

const Header = () => {
    return (
        <div className='grid grid-cols-2 justify-between items-center'>
            <div className='mt-36'>
                <h1 className='text-7xl font-extrabold'>
                    One Step Closer To Your
                    <span className='text-[#9873FF]'> Dream Job</span>
                </h1>
                <p className='mt-6 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='mt-8 py-5 px-7 rounded text-xl font-extrabold text-white bg-[#9873FF]' type="button">Get Start</button>
            </div>
            <div className=''>
                <img className='w-full h-auto'  src={person} alt='Profile' />
            </div>
        </div>
    );
};

export default Header;