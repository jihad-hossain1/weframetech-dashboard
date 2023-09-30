import Link from 'next/link';
import React from 'react';

const HomePage = () => {
    return (
        <div className=''>
            <div className='mt-32'>
            <h4 className='text-3xl md:text-7xl font-bold md:font-extrabold text-center text-[#6418C3]'>
                weFrame-Tech
            </h4>
            </div>
            <div className='text-center mt-10'>
                <Link href={`/dashboard`} className='rounded-xl px-6 py-3  text-[#7879F1] text-xl font-semibold transition ease-in-out delay-150 bg-[#211A75] hover:-translate-y-1 hover:scale-110 hover:bg-[#282264] duration-300'>Go Dashboard</Link>
            </div>
        </div>
    );
};

export default HomePage;