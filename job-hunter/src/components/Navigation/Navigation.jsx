import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className='bg-[#f8f9ff]'>
            <div className='container mx-auto'>
                <div className='flex justify-between flex-col md:flex-row items-center gap-5 pt-12'>
                    <div>
                        <Link to={"/"}>
                            <h1 className='text-3xl font-extrabold'>Job Hunter</h1>
                        </Link>
                    </div>
                    <div className='flex gap-8 text-[#757575] font-medium'>
                        <NavLink
                            to={"/"}
                            className={({ isActive }) => isActive ? "font-extrabold text-black": ""}
                        >Home
                        </NavLink>
                        <NavLink
                            to={"/statistics"}
                            className={({ isActive }) => isActive ? "font-extrabold text-black": ""}
                        >Statistics
                        </NavLink>
                        <NavLink
                            to={"/appliedjobs"}
                            className={({ isActive }) => isActive ? "font-extrabold text-black": ""}
                        >Applied Jobs
                        </NavLink>
                        <NavLink
                            to={"/blog"}
                            className={({ isActive }) => isActive ? "font-extrabold text-black": ""}
                        >Blog
                        </NavLink>
                    </div>
                    <div className='text-white text-xl font-extrabold'>
                        <button type="button" className='px-4 py-3 lg:px-7 lg:py-5 bg-[#9873FF] rounded-md'>
                            <a href="#featuredJobs">Start Applying</a>  
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;