import React from 'react';
import SingleTodo from './SingleTodo';
import {TiPlus} from 'react-icons/ti'
const TodoList = ({myTodo}) => {
    return (
        <div>
            <div className='flex justify-between items-center px-4 mb-3'>
                <h4 className='text-slate-100 font-semibold text-xl'>To-Do List {`(${myTodo.length})`} </h4>
                <button className='rounded-xl bg-[#6418C3] '>
                <TiPlus className='text-slate-100 text-2xl m-1'></TiPlus>
                </button>
            </div>
            <div className='flex flex-col space-y-4'>
            {myTodo.map((item,index)=><SingleTodo key={index} item={item}></SingleTodo>)}
        </div>
        </div>
    );
};

export default TodoList;