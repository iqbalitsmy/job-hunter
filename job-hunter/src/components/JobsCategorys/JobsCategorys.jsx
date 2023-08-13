import React, { useEffect, useState } from 'react';
import dataFetch from '../Loaders/jsonLoaders';
import JobCategory from '../JobCategory/JobCategory';


const JobsCategorys = () => {
    const [jobsCategorys, setJobsCategorys] = useState([]);

    // Json file data load
    useEffect(() => {
        dataFetch("jobsCategory.json").then(data => setJobsCategorys(data))
    }, [])


    return (
        <section className='mt-32'>
            <div className='text-center'>
                <h1 className='text-5xl font-extrabold mb-4'>Job Category List</h1>
                <p className='font-medium mb-8 text-[#757575]'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 justify-center gap-6'>
                {
                    jobsCategorys.map(jobCategory => <JobCategory
                        key={jobCategory.id} 
                        jobCategory={jobCategory}
                    ></JobCategory>)
                }
            </div>
        </section>
    );
};

export default JobsCategorys;