import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import ProgressBarComponent from "./progressBar/ProgressBarComponent";

const KanbanProgressReport = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 ml-10 mt-5'>
      <div className="flex flex-col md:grid">
        <div className='relative mb-14 md:mb-0'>
          <div className='absolute left-0  rounded-full  w-10  h-10 bg-[#C4C4C4] border-2 border-slate-100'></div>
          <div className='absolute left-6  rounded-full  w-10  h-10 bg-[#C4C4C4] border-2 border-slate-100'></div>
          <div className='absolute left-12 rounded-full  w-10  h-10 bg-[#C4C4C4] border-2 border-slate-100'></div>
          <div className='absolute left-16 rounded-full  w-10  h-10 bg-[#E328AF] border-2 border-slate-100 flex justify-center items-center'>{`3+`}</div>
        </div>
        <div className='grid grid-cols-2 gap-3 md:flex md:ml-32  space-x-4 items-center'>
          <button className='rounded-xl max-w-[170px] px-4 text-white flex items-center py-2 space-x-2 bg-[#6418C3]'>
            <FaUserPlus className="text-xl"></FaUserPlus> <span>Invite People</span>
          </button>
          <button className='rounded-xl px-4 text-white py-2 space-x-2 border border-[#7879F1]'>
            Private
          </button>
          <button className='rounded-xl px-4 text-white py-2 space-x-2  bg-[#7879F1]'>
            Edit
          </button>
          <button className='rounded-xl max-w-[170px] px-4 md:px-4 text-white flex items-center py-2 space-x-2  border border-[#7879F1]'>
            <BiMessageDetail className="text-xl"></BiMessageDetail> <span>{`45`} Comments</span>
          </button>
        </div>
      </div>
      <ProgressBarComponent></ProgressBarComponent>
    </div>
  );
};

export default KanbanProgressReport;
