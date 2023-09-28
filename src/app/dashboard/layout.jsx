import DashHeader from '@/components/DashHeader';
import SideNavbar from '@/components/SideNavbar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <section className='flex'>
            <SideNavbar></SideNavbar>
            <div className='flex-1 md:flex h-screen relative'>
                <DashHeader></DashHeader>
            </div>
            <div className='bg-[#0D0B21]'>
            {children}
            </div>
        </section>
    );
};

export default DashboardLayout;