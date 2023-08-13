import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faDollarSign, faCalendarDays, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useLoaderData } from 'react-router-dom';
import DetailsShow from '../DetailsShow/DetailsShow';
import { addToDb } from '../../utilities/fakedb';

const JobDetails = () => {
    const { id, jobTitle, location, salary, jobDescription, jobResponsibility, educationalRequirements, experiences, contactInformation } = useLoaderData();
    const { phone, email } = contactInformation;
    return (
        <section className='container mx-auto mt-32'>
            <div className='flex flex-col md:flex-row justify-between gap-6'>
                <div className='text-[#757575] font-medium'>
                    <p className='mb-6'><span className='text-black font-extrabold'>Job Description: </span>{jobDescription}</p>
                    <p className='mb-6'><span className='text-black font-extrabold'>Job Responsibility: </span>{jobResponsibility}</p>
                    <p className='mb-6'><span className='text-black font-extrabold block pb-4'>Educational Requirements: </span>{educationalRequirements}</p>
                    <p className='mb-6'><span className='text-black font-extrabold block pb-4'>Experiences: </span>{experiences}</p>
                </div>
                {/* ----- Job Details -----  */}
                <div >
                    <div className='bg-[#f4f1ff] p-8 text-xl'>
                        <div>
                            <h2 className='font-extrabold'>Job Details</h2>
                            <hr className='mt-6'></hr>
                            <div className='text-[#757575] mt-6'>
                                <DetailsShow
                                    element={<FontAwesomeIcon icon={faDollarSign} />}
                                    str="Salary: "
                                    data={salary}
                                ></DetailsShow>

                                <DetailsShow
                                    element={<FontAwesomeIcon icon={faCalendarDays} />}
                                    str="Job Title: "
                                    data={jobTitle}
                                ></DetailsShow>
                            </div>
                        </div>
                        <div className='mt-6'>
                            <h2 className='font-extrabold'>Contact Information</h2>
                            <hr className='mt-6'></hr>
                            <div className='pt-4 flex flex-col justify-start gap-2 lg:gap-6 text-[#757575]'>
                                <DetailsShow
                                    element={<FontAwesomeIcon icon={faPhone} />}
                                    str="Phone: "
                                    data={phone}
                                ></DetailsShow>

                                <DetailsShow
                                    element={<FontAwesomeIcon icon={faEnvelope} />}
                                    str="Email: "
                                    data={email}
                                ></DetailsShow>

                                <DetailsShow
                                    element={<FontAwesomeIcon icon={faLocationDot} />}
                                    str="Address: "
                                    data={location}
                                ></DetailsShow>
                            </div>
                        </div>
                    </div>
                    <div className='text-white text-xl font-extrabold mt-6'>
                        <button 
                        onClick={() => addToDb(id)}
                        className='w-full py-5 bg-[#9E90FE] rounded-md' 
                        type="button"
                        >Apply Now</button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default JobDetails;