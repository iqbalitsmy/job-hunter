import React from 'react';

const JobCategory = ({ jobCategory }) => {
    const { image, category_name, jobs_available } = jobCategory;
    return (
        <div className='bg-[#faf9ff] p-10'>
            <figure className='p-4 bg-[#f0edff] inline-block'>
                <img src={image} alt="image" />
            </figure>
            <div className='pt-8'>
                <h2 className='text-xl font-extrabold text-[#474747]'>{category_name}</h2>
                <p className='font-medium text-[#A3A3A3]'>{jobs_available} Jobs Available</p>
            </div>
        </div>
    );
};

export default JobCategory;