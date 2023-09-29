import KanbanNavbar from '@/components/KanbanCompo/KanbanNavbar';
import React from 'react';

const KanbanLayout = ({children}) => {
    return (
        <div className='px-12 py-8'>
            <KanbanNavbar></KanbanNavbar>
            {children}
        </div>
    );
};

export default KanbanLayout;