import React from "react";

import { LiaSearchSolid } from "react-icons/lia";

const DashHeader = () => {
  return (
    <div className='bg-[#15132B] py-2 px-4 absolute h-20 w-full flex justify-between text-slate-100 border border-[#19163a]'>
      
      <div className='flex max-w-[250px]'>
          <div className='flex  items-center justify-center rounded-tl-full rounded-bl-full  bg-[#211A75] p-7'>
          <button className='absolute  text-[#7879F1] text-2xl '>
          <LiaSearchSolid ></LiaSearchSolid>
          </button>
            
          </div>
          <input
            type='text'
            className='w-full pl-2  text-slate-100 font-semibold outline-0 p-7 bg-[#211A75] rounded-tl-lg 
             rounded-r-full'
            placeholder='search here'
            id=''
          />
         
        </div>
      <p>other menus</p>
      <p>language</p>
      <p>User section</p>
    </div>
  );
};

export default DashHeader;
