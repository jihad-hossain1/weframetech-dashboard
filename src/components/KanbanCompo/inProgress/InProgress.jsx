import React from 'react';
import SingleProgress from './SingleProgress';
import {TiPlus} from 'react-icons/ti'

const InProgress = ({inProgress}) => {
    return (
        <div>
            <div className='flex justify-between items-center px-4 mb-3'>
                <h4 className='text-slate-100 font-semibold text-xl'>In Progress {`(${inProgress.length || 0})`} </h4>
                <button className='rounded-xl bg-[#211A75]'>
                <TiPlus className='text-[#6418C3] text-2xl m-1'></TiPlus>
                </button>
            </div>
        <div className='flex flex-col space-y-4'>
            {inProgress.map((item,index)=><SingleProgress key={index} item={item}></SingleProgress>)}
        </div>
        </div>
    );
};

export default InProgress;