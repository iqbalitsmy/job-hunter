import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='container mx-auto flex justify-between items-center mt-12'>
            <div>
                <Link to={"/"}>
                    <h1 className='text-3xl font-extrabold'>Job Hunter</h1>
                </Link>
            </div>
            <div className='flex gap-8 text-[#757575]'>
                <Link to={"/statistics"} className='font-medium'>Statistics</Link>
                <Link to={"/appliedjobs"} className='font-medium'>Applied Jobs</Link>
                <Link to={"/blog"} className='font-medium'>Blog</Link>
            </div>
            <div className='text-white text-xl font-extrabold'>
                <button type="button" className='px-7 py-5 bg-[#9873FF] rounded-md'>Start Applying</button>
            </div>
        </nav>
    );
};

export default Navigation;