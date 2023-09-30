import DashHeader from '@/components/DashHeader';
import SideNavbar from '@/components/SideNavbar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <>
        <section className='grid md:flex'>
            <SideNavbar></SideNavbar>
            <div className='flex-1 md:flex relative'>
                <DashHeader></DashHeader>
                <div className='bg-[#0D0B21] h-screen w-full mt-4 md:mt-20'>
                {children}
                </div>
            </div>
        </section>
        
        </>
    );
};

export default DashboardLayout;