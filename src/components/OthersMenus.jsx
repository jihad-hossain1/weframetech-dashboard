import React from 'react';

import { BiSolidBellRing, BiSolidMoviePlay } from "react-icons/bi";
import { MdLibraryAddCheck, MdEmail } from "react-icons/md";

const OthersMenus = () => {
    const notifications = ["one", "two", "three", "four"];
    const chats = [];
    return (
        <div className='flex space-x-3 w-full items-center '>
        <h4 className='uppercase text-[#6418C3] text-sm font-semibold'>
          Others menus
        </h4>
        <div className='flex space-x-8 items-center'>
          
          <div className='relative '>
            <BiSolidBellRing className='text-3xl text-[#7879F1] relative'></BiSolidBellRing>
            <span className=' absolute  -right-2 -top-4 rounded-full px-2 bg-[#5ECFFF] text-gray-950 font-semibold'>
              {notifications ? notifications.length : 0}
            </span>
          </div>
          <div className='relative '>
            <BiSolidMoviePlay className='text-3xl text-[#464366] relative'></BiSolidMoviePlay>
            <span className=' absolute  -right-2 -top-4 rounded-full px-2 bg-[#5ECFFF] text-gray-950 font-semibold'>
              {notifications ? notifications.length : 0}
            </span>
          </div>
          <div className='relative '>
            <MdLibraryAddCheck className='text-3xl text-[#7879F1] relative'></MdLibraryAddCheck>
            <span className=' absolute  -right-2 -top-4 rounded-full px-2 bg-[#5ECFFF] text-gray-950 font-semibold'>
              {notifications ? notifications.length : 0}
            </span>
          </div>
          <div className='relative '>
            <MdEmail className='text-3xl text-[#7879F1] relative'></MdEmail>
            <span className={chats.length > 0  ? 'absolute  -right-2 -top-4 rounded-full px-2 bg-[#5ECFFF] text-gray-950 font-semibold' : 'absolute  -right-2 -top-4 rounded-full px-2 bg-[#E328AF] text-gray-950 font-semibold '}>
              {chats.length > 0 ? chats.length : <span className='text-sm px-[2px]'>!</span>}
            </span>
          </div>
          
        </div>
      </div>
    );
};

export default OthersMenus;