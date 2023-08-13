import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
import Banner from '../Banner/Banner';

const AppliedJobs = () => {
    const savedJobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState(savedJobs);

    return (
        <section>
            <div className='bg-[#f8f9ff] flex justify-center items-center'>
                <Banner>Applied Jobs</Banner>
            </div>
            <div className='container mx-auto'>

                {
                    appliedJobs.map((appliedJob) => <AppliedJob
                        key={appliedJob.id}
                        appliedJob={appliedJob}
                    ></AppliedJob>)
                }
            </div>
        </section>
    );
};

export default AppliedJobs;