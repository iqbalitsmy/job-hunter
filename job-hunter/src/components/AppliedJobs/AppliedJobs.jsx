import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';

const AppliedJobs = () => {
    const savedJobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState(savedJobs);

    return (
        <section className='container mx-auto'>
            {
                appliedJobs.map((appliedJob) => <AppliedJob
                    key={appliedJob.id}
                    appliedJob={appliedJob}
                ></AppliedJob>)
            }
        </section>
    );
};

export default AppliedJobs;