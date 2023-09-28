import React from 'react';

const CoursesLayout = ({children}) => {
    return (
        <div>
            <nav>Courses navbar </nav>
            {children}
        </div>
    );
};

export default CoursesLayout;