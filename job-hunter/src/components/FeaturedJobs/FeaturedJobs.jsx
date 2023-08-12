import React, { useEffect, useState } from 'react';
import loader from '../Loaders/jsonLoaders';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const FeaturedJobs = () => {
    const [featuredJobs, setFeaturedJobs] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    let limit = 4;

    // Featured jobs limits
    if(seeAll) {
        limit = featuredJobs.length;
    } else {
        limit = 4;
    }

    // Json file data load from loader external function
    useEffect(() => {
        loader("featuredJobs.json").then(data => setFeaturedJobs(data));
    }, [])


    return (
        <section className='mt-32 mb-32'>
            <div className='text-center'>
                <h1 className='text-5xl font-extrabold pb-4'>Featured Jobs</h1>
                <p className='font-medium text-[#757575] pb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-6'>
                {
                    featuredJobs.slice(0, limit).map(featuredJob => (<FeaturedJob
                        key={featuredJob.id}
                        featuredJob={featuredJob}
                    ></FeaturedJob>))
                }
            </div>
            <div className='pt-6 text-white text-xl font-extrabold text-center'>
                <button
                    className='bg-[#9873FF] px-[18px] py-3 rounded'
                    type="button"
                    onClick={() => setSeeAll(!seeAll)}
                >See All Jobs</button>
            </div>
        </section>
    );
};

export default FeaturedJobs;