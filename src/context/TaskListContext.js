import React, { createContext, useState } from 'react'

// the const name can be anything ,and this line will create a context for it.
export const TaskListContext = createContext()

// This is just a component tat will include this state , again const name can be anything
const TaskListContextProvider = props => {
    const [tasks, setTasks] = useState([ 
        {task:'Read the book', id:1},
        {task:'Wash the car', id:2},
        {task:'Write some Code', id:3},
        {task:'Write Letter', id:4}
    ]);

    return(
        <TaskListContext.Provider value={{tasks}}>
            {props.children}            
        </TaskListContext.Provider>
    )
};

// we're exporting the component , tat uses the createContext state
export default TaskListContextProvider;
