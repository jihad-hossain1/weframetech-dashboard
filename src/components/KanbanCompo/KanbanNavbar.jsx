"use client";

import Link from "next/link";
import React, { useState } from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { BiSolidLeftArrowCircle } from "react-icons/bi";
import KanbanProgressReport from "./KanbanProgressReport";


const KanbanNavbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='px-12 py-10 rounded-sm bg-[#15132B] gird grid-cols-1'>
      <div className='flex items-center justify-between'>
        <div className='flex space-x-4'>
          <Link href={`/dashboard`}>
            <BiSolidLeftArrowCircle className='text-2xl mt-2 text-[#A5A5A5] '></BiSolidLeftArrowCircle>
          </Link>
          <div>
            <h2 className='text-2xl text-slate-100 font-bold pb-4'>
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
            <p className='text-sm text-[#A5A5A5]'>Sunnyvale, Ca</p>
          </div>
          <div className='bg-slate-100 p-2 rounded-xl flex justify-center items-center'>
            <div className='rounded-full bg-green-700 w-8 h-8'>
                <div className="rounded-full bg-red-600 w-6 h-6">
                    <div className="rounded-full bg-slate-100 w-4 h-4"></div>
                </div>
            </div>
          </div>
          <div className=''>
            <BsThreeDotsVertical
              onClick={() => setIsActive(!isActive)}
              className='text-2xl text-[#A5A5A5] relative cursor-pointer'
            ></BsThreeDotsVertical>
            {isActive && (
              <ul className=' bg-[#211A75] px-12  py-4 rounded-sm  space-y-4  fixed mt-4 right-20'>
                <li className='hover:text-[#7879F1] text-slate-100'>
                  <Link
                    onClick={() => setIsActive(false)}
                    href={"/dashboard/kanban/profile"}
                  >
                    Profile
                  </Link>
                </li>
                <li className='hover:text-[#7879F1] text-slate-100'>
                  <Link
                    onClick={() => setIsActive(false)}
                    href={"/dashboard/kanban"}
                  >
                    LogOut
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
      <KanbanProgressReport></KanbanProgressReport>
    </div>
  );
};

export default KanbanNavbar;
