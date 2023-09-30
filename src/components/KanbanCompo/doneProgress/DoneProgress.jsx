import React from 'react';
import SingleDoneProgress from './SingleDoneProgress';
import {TiPlus} from 'react-icons/ti'

const DoneProgress = ({doneProgres}) => {
    return (
        <div>
            <div className='flex justify-between items-center px-4 mb-3'>
                <h4 className='text-slate-100 font-semibold text-xl'>Done {`(${doneProgres.length || 0})`} </h4>
                <button className='rounded-xl bg-[#211A75]'>
                <TiPlus className='text-[#6418C3] text-2xl m-1'></TiPlus>
                </button>
            </div>
        <div>
            <div className='flex flex-col space-y-4'>
            {doneProgres.map((item,index)=><SingleDoneProgress key={index} item={item}></SingleDoneProgress>)}
        </div>
        </div>
        </div>
    );
};

export default DoneProgress;