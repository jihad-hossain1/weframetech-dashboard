import KanbanNavbar from '@/components/KanbanCompo/KanbanNavbar';
import React from 'react';

const KanbanLayout = ({children}) => {
    return (
        <div className=' px-2 py-3 md:px-12 md:py-8 '>
            <KanbanNavbar></KanbanNavbar>
            {children}
        </div>
    );
};

export default KanbanLayout;