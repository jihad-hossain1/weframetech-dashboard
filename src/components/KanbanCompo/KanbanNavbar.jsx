import React from 'react';
import {BsThreeDotsVertical} from 'react-icons/bs'
import {BiSolidLeftArrowCircle} from 'react-icons/bi'
import Link from 'next/link';
const KanbanNavbar = () => {
    return (
        <div className='px-12 py-10 rounded-sm bg-[#15132B] gird grid-cols-1'>
            <div className='flex items-center justify-between'>
                <div className='flex space-x-4 items-center'>
                    <div>
                        <Link href={`/dashboard`}>
                            <BiSolidLeftArrowCircle className='text-2xl text-[#A5A5A5] '></BiSolidLeftArrowCircle>
                        </Link>
                    </div>
                    <div>
                        <h2 className='text-2xl text-slate-100 font-bold'>
                            School November Tasks
                        </h2>
                        <h4 className='text-sm text-[#A5A5A5]'>
                            Created by Instructor Day on November 31, 2022
                        </h4>
                    </div>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className='flex flex-col items-end'>
                        <h4 className='font-semibold text-slate-100 text-xl'>
                            Centered Martial Arts
                        </h4>
                        <p className='text-sm text-[#A5A5A5]'>
                            Sunnyvale, Ca
                        </p>
                    </div>
                    <div className='bg-green-800 p-2 rounded-xl flex justify-center items-center'>
                        <div className='rounded-full bg-red-700 w-8 h-8'>
                        </div>
                    </div>
                    <div>
                        <BsThreeDotsVertical className='text-2xl text-[#A5A5A5] '></BsThreeDotsVertical>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KanbanNavbar;