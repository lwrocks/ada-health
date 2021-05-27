import React from 'react';
import ToDo from './ToDo'

const ToDoList = ({ToDoList}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} />
                )
            })}
        </div>
    )
}

export default ToDoList;