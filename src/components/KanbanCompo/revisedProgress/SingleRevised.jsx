import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const SingleRevised = ({item}) => {
    return (
        <div className='bg-[#211A75] rounded-lg p-6 flex flex-col space-y-4'>
        <div className='flex items-center justify-between'>
          <h4 className='text-[#FFAB2D]'>{item?.title}</h4>
          <button>
            <BsThreeDots className='text-[#A5A5A5] text-xl'></BsThreeDots>
          </button>
        </div>
        <div>
          <p className='text-slate-100 break-all'>{item?.details}</p>
        </div>
        <div>
        <div className='w-2/4 h-2 rounded-md bg-[#1E1C3A]'>
          <div className='h-full rounded-md bg-[#6418C3] transition duration-150 ease-out' style={{ width: `${item?.progressDureation}%` }}></div>
        </div>
        </div>
        <div className="flex justify-between">
        <div className='relative'>
            <div className='absolute left-0  rounded-full w-7 h-7 bg-[#C4C4C4] border-2 border-slate-100'></div>
            <div className='absolute left-4 z-20 rounded-full w-7 h-7 bg-[#C4C4C4] border-2 border-slate-100'></div>
            <div className='absolute left-8 z-30 rounded-full w-7 h-7 bg-[#C4C4C4] border-2 border-slate-100'></div>
      </div>
          <div className="flex items-center space-x-2 text-[#A5A5A5] text-sm">         
           <AiOutlineClockCircle></AiOutlineClockCircle> <h4>Due in {item?.dueDate} days</h4>     
          </div>
        </div>
      </div>
    );
};

export default SingleRevised;