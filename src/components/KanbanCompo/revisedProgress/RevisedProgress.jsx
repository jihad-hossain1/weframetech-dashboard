import React from "react";
import { TiPlus } from "react-icons/ti";
import SingleRevised from "./SingleRevised";

const RevisedProgress = ({ revisedProgres }) => {
  return (
    <div>
      <div>
        <div className='flex justify-between items-center px-4 mb-3'>
          <h4 className='text-slate-100 font-semibold text-xl'>
            Revised {`(${revisedProgres.length || 0})`}{" "}
          </h4>
          <button className='rounded-xl bg-[#211A75]'>
                <TiPlus className='text-[#6418C3] text-2xl m-1'></TiPlus>
                </button>
        </div>
        <div>
        <div className='bg-[#211A75] rounded-xl p-6 '>
          <div className='bg-[#15132B] hover:border-solid  group w-full flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[#7879F1] text-sm leading-6 text-[#7879F1] font-medium py-4 '>
            Move card here
          </div>
        </div>
      </div>
        <div className='flex flex-col space-y-4 mt-4'>
          {revisedProgres ? (
            revisedProgres.map((item, index) => (
              <SingleRevised key={index} item={item}></SingleRevised>
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default RevisedProgress;
