import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const FeaturedJob = ({ featuredJob }) => {
    const { companyLogo, jobTitle, companyName, remoteOrOnsite, location, jobTypes, salary } = featuredJob;
    return (
        <div className='p-10 shadow-sm'>
            <figure className='pb-8'>
                <img src={companyLogo} alt="Company Logo" />
            </figure>
            <div>
                <h2 className='text-2xl font-extrabold'>{jobTitle}</h2>
                <p className='pt-2 text-xl font-semibold text-[#757575]'>{companyName}</p>
                <div className='flex gap-4 text-[#9873FF] pt-4 font-extrabold'>
                    <span className='border border-[#8a83fe] rounded px-[19px] py-[9px]'>
                        <p>{remoteOrOnsite}</p>
                    </span>
                    <span className='border border-[#8a83fe] rounded px-[19px] py-[9px]'>
                        <p>{jobTypes}</p>
                    </span>
                </div>
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
                {/*-------- View Details Section --------*/}
                <div className='pt-6 text-white text-xl font-extrabold'>
                    <Link to={"/job/:id"}>
                        <button className='bg-[#9873FF] px-[18px] py-3 rounded' type="button">View Details</button>
                    </Link>
                </div>
            </div>
        </div >
    );
};

export default FeaturedJob;