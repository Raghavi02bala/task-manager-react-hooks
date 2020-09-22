import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid';

// the const name can be anything ,and this line will create a context for it.
export const TaskListContext = createContext()

// This is just a component tat will include this state , again const name can be anything
const TaskListContextProvider = props => {
    const [tasks, setTasks] = useState([ 
        {title:'Read the book', id:1},
        {title:'Wash the car', id:2},
        {title:'Write some Code', id:3},
        {title:'Write Letter', id:4}
    ]);

    const addTask = title =>{
        // ...(3dots),spread operator
        setTasks([...tasks,{ title, id: uuid() }])
    }

    const removeTask = id =>{
        // the array is filtered. It's returned only when it's id is not equal to this id.
        setTasks(tasks.filter(task => task.id!==id))
    } 

    return(
        <TaskListContext.Provider value={{tasks, addTask, removeTask}}>
            {props.children}            
        </TaskListContext.Provider>
    )
};

// we're exporting the component , tat uses the createContext state
export default TaskListContextProvider;
