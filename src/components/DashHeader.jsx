
import React from "react";
import { HiBars3 } from "react-icons/hi2";

import OthersMenus from "./OthersMenus";
import Language from "./Language";
import DashboardLogin from "./UserNavbarDashboard/DashboardLogin";

const DashHeader = () => {
  
  return (
    <div className='bg-[#15132B] py-2 px-3 md:py-3 md:px-4 md:absolute md:h-20 w-full flex flex-col-reverse md:grid  md:grid-cols-3 gap-6  text-slate-100 border border-[#19163a]'>
      {/* search menu section  */}
      <div>
        <form className='group relative w-full'>
          <svg
            width='20'
            height='20'
            fill='currentColor'
            className='sm:h-4 sm:w-4 absolute left-3 top-1/2 -mt-2.5 text-[#7879F1] pointer-events-none '
            aria-hidden='true'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            />
          </svg>
          <input
            className=' bg-[#211A75]  focus:outline-none  w-full text-sm leading-6 text-[#7879F1] placeholder-[#7879F1] rounded-full py-[6px] md:py-3 pl-10 pr-5 shadow-sm'
            type='search'
            aria-label='search here'
            placeholder='Search here...'
          />
        </form>
      </div>
      {/* others menu section  */}
      <div className='hidden md:block md:mt-2'>
        <OthersMenus></OthersMenus>
      </div>
      <div className='flex items-center space-x-4 md:grid '>
        <div className='block md:hidden '>
         
          <OthersMenus></OthersMenus>
        </div>
        <div className='flex space-x-4 items-center justify-end'>
          <Language></Language>
          <div className='hidden  md:inline-block h-10 min-h-[1em] w-0.5 self-stretch bg-[#1f1a5c] opacity-100 mt-3'></div>
          <DashboardLogin></DashboardLogin>
        </div>
      </div>
    </div>
  );
};

export default DashHeader;
