"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DashboardLogin = () => {
    const user = {
        displayName: 'Jihad Hossain',
        photoURL: '',
        userStatus: 'Super Admin'
    };

  const [isActive, setIsActive] = useState(false);

  return (
    <div >
      <div  className="flex items-center space-x-4">
        <img className="rounded-xl w-10 " src={user?.photoURL || `https://i.ibb.co/njsh6Ls/icons8-user-96.png`} alt="user photo" />
        <div className="flex flex-col items-center">
            <h4>
                {user?.displayName}
            </h4>
            <h4 className="text-xs">
                {user?.userStatus}
            </h4>
        </div>
        <IoIosArrowDown onClick={() => setIsActive(!isActive)} className="text-xl font-semibold cursor-pointer"></IoIosArrowDown>
      </div>
      {isActive && (
        <div className="relative ">
            <ul className="fixed top-16 bg-[#211A75] px-12  py-4 rounded-sm mt-4 ml-14 space-y-4">
          <li className="hover:text-[#7879F1]">
            <Link onClick={()=>setIsActive(false)} href={'/dashboard'}>Profile</Link>
          </li>
          <li className="hover:text-[#7879F1]">
            <Link onClick={()=>setIsActive(false)} href={'/dashboard'}>LogOut</Link>
          </li>
          
        </ul>
        </div>
      )}
    </div>
  );
};

export default DashboardLogin;
