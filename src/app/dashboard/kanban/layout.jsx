import React from 'react';

const KanbanLayout = ({children}) => {
    return (
        <div>
            <nav>kanban header here ...</nav>
            {children}
        </div>
    );
};

export default KanbanLayout;