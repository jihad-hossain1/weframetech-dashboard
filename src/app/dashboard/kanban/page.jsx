import DoneProgress from '@/components/KanbanCompo/doneProgress/DoneProgress';
import InProgress from '@/components/KanbanCompo/inProgress/InProgress';
import RevisedProgress from '@/components/KanbanCompo/revisedProgress/RevisedProgress';
import TodoList from '@/components/KanbanCompo/todo/TodoList';
import React from 'react';
import { myProgress } from '@/data/todoData';

const KanbanPage = () => {
    const myTodo = myProgress.todo;
    const inProgress = myProgress.inProgress;
    const doneProgres = myProgress.doneProgress;
    const revisedProgres = myProgress.revisedProgress;
    return (
        <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {/* todoList  */}
            <TodoList myTodo={myTodo}></TodoList>
            {/* In Progress  */}
            <InProgress inProgress={inProgress}></InProgress>
            {/* Done  */}
            <DoneProgress doneProgres={doneProgres}></DoneProgress>
            {/* Revised  */}
            <RevisedProgress revisedProgres={revisedProgres}></RevisedProgress>
        </div>
    );
};

export default KanbanPage;