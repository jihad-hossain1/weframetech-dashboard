import React from 'react';
import './style.css'


const ProgressBar = () => {
    const progrs = 75
    return (
        <div className='w-full h-10 bg-red-600'>
            <div className={`w-full h-10 bg-blue-500 transit `}  style={{width: `${progrs}`}}>
                
            </div>
        </div>
    );
};

export default ProgressBar;