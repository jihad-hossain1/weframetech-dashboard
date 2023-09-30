import React from "react";


const ProgressBar = ({ progress }) => {

  return (
    <div className='flex space-x-4 items-center justify-end mt-3'>
      <div className='text-slate-100 text-sm break-keep'>Total progress {progress}%</div>
      <div className='w-2/4 h-3 rounded-md bg-[#1E1C3A]'>
        <div className='h-full rounded-md bg-[#6418C3] transition duration-150 ease-out' style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
