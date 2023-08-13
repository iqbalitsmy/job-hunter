import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'


const AppliedJob = ({ appliedJob }) => {
    const { id, jobTitle, companyName, location, salary, companyLogo, remoteOrOnsite, jobTypes } = appliedJob;
    return (
        <div className='flex justify-between items-center gap-3 mb-14 p-7 shadow-sm mt-32'>
            <div className='flex items-center gap-8'>
                <div className='h-60 w-60 px-7 flex justify-center items-center bg-[#F4F4F4]'>
                    <figure className=''>
                        <img className='object-fill' src={companyLogo} alt="Company Logo" />
                    </figure>
                </div>
                <div>
                    <h1 className='text-2xl font-extrabold'>{jobTitle}</h1>
                    <p className='text-xl font-semibold text-[#757575] pt-2'>{companyName}</p>
                    <div className='flex gap-4 text-[#9873FF] pt-4 font-extrabold'>
                        <span className='border border-[#8a83fe] rounded px-[19px] py-[9px]'>
                            <p>{remoteOrOnsite}</p>
                        </span>
                        <span className='border border-[#8a83fe] rounded px-[19px] py-[9px]'>
                            <p>{jobTypes}</p>
                        </span>
                    </div>
                    {/* ---- Location and Salary */}
                    <div className='pt-4 grid grid-cols-1 lg:grid-cols-2 justify-start gap-2 lg:gap-6 text-[#757575]'>
                        <div className='flex justify-start items-center gap-2'>
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>{location}</p>
                        </div>
                        <div className='flex justify-start items-center gap-2'>
                            <FontAwesomeIcon icon={faDollarSign} />
                            Salary: {salary}
                        </div>
                    </div>
                </div>
            </div>
            {/*-------- View Details Section --------*/}
            <div className='pt-6 text-white text-xl font-extrabold'>
                <Link to={`/job/${id}`}>
                    <button className='bg-[#9873FF] px-[18px] py-3 rounded' type="button">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default AppliedJob;