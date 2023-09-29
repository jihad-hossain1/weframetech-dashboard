import React from "react";

// import { LiaSearchSolid } from "react-icons/lia";
import { BiSolidBellRing, BiSolidMoviePlay } from "react-icons/bi";
import { MdLibraryAddCheck, MdEmail } from "react-icons/md";
import OthersMenus from "./OthersMenus";

const DashHeader = () => {
  
  return (
    <div className='bg-[#15132B] py-3 px-4 absolute md:h-20 w-full grid grid-cols-1 md:grid-cols-3 gap-6  text-slate-100 border border-[#19163a]'>
      {/* search menu section  */}
      <div>
        <form className='group relative w-2/3 md:w-full'>
          <svg
            width='20'
            height='20'
            fill='currentColor'
            class='absolute left-3 top-1/2 -mt-2.5 text-[#7879F1] pointer-events-none '
            aria-hidden='true'
          >
            <path
              fill-rule='evenodd'
              clip-rule='evenodd'
              d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            />
          </svg>
          <input
            className=' bg-[#211A75]  focus:outline-none  w-full text-sm leading-6 text-[#7879F1] placeholder-[#7879F1] rounded-full py-3 pl-10 pr-5 shadow-sm'
            type='search'
            aria-label='search here'
            placeholder='Search here...'
          />
        </form>
      </div>

      {/* others menu section  */}
     <OthersMenus></OthersMenus>
      <div className='flex '>
        <div className=''>language</div>

        <div className='md:mt-4'>User section</div>
      </div>
    </div>
  );
};

export default DashHeader;
