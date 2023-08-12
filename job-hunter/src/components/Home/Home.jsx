import React from 'react';
import Header from '../Header/Header';
import JobsCategorys from '../JobsCategorys/JobsCategorys';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <>
            <header className='bg-[#f8f9ff]'>
                <Header />
            </header>
            <main className='container mx-auto'>
                <JobsCategorys></JobsCategorys>
                <FeaturedJobs></FeaturedJobs>
            </main>
        </>
    );
};

export default Home;