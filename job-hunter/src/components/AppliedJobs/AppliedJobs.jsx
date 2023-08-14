import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from '../AppliedJob/AppliedJob';
import Banner from '../Banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';



const AppliedJobs = () => {
    const savedJobs = useLoaderData()
    const [appliedJobs, setAppliedJobs] = useState(savedJobs);
    const [open, setOpen] = useState(false);

    const sortBy = (str) => {
        console.log(str)
        const filteredJobs = savedJobs.filter(({ remoteOrOnsite }) => remoteOrOnsite === str)
        console.log(filteredJobs);
        setAppliedJobs(filteredJobs);
    }


    return (
        <section>
            <div className='bg-[#f8f9ff] flex justify-center items-center'>
                <Banner>Applied Jobs</Banner>
            </div>
            <div className='container mx-auto'>
                {/* ---- Drop Down Button ----- */}
                <div className='relative bg-[#F4F4F4] inline-block p-5'
                    onMouseLeave={() => setOpen(false)}
                >
                    <a href="#">
                        <button type="button"
                            onMouseOver={() => setOpen(true)}
                            className="flex items-center"
                        >
                            <span className='hover:text-[#9873FF]'>
                                Filter By
                            </span>
                            <span
                                className='pl-2 text-xs'>
                                <FontAwesomeIcon icon={faChevronDown} />
                            </span>
                        </button>
                    </a>
                    <ul
                        className={`absolute bg-white shadow-xl pl-5 pt-3 pr-14 ${open ? "block" : "hidden"
                            }`}
                    >
                        <li
                            onClick={() => sortBy("Remote")}
                            className="hover:text-[#9873FF] px-5 py-4">
                            <a
                                href="#">
                                Remote
                            </a>
                        </li>
                        <li
                            onClick={() => sortBy("Onsite")}
                            className="hover:text-[#9873FF] px-5 py-4">
                            <a
                                href="#">
                                Onsite
                            </a>
                        </li>
                    </ul>
                </div>
                {/* ---- Drop Down Button End----- */}
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