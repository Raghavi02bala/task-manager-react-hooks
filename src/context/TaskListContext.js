import React, { createContext, useState } from 'react';
import  uuid  from 'uuid';

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

    const [editItem, setEditItem] = useState(null)

    const addTask = title =>{
        // ...(3dots),spread operator
        setTasks([...tasks,{ title, id: uuid() }]);
    };

    const removeTask = id =>{
        // the array is filtered. It's returned only when it's id is not equal to this id.
        setTasks(tasks.filter(task => task.id!==id));
    };
    
    // set the whole list to empty array
    const clearList = () =>{
        setTasks([]);
    };
    // to find the item tat is to be edited
    const findItem = id =>{
        const item = tasks.find(task=> task.id === id)

        setEditItem(item);
    };
    // to edit the item
    const editTask = (title,id) =>{
        const newTasks = tasks.map(task => (task.id === id ? {title,id}: task));
        setTasks(newTasks);
    };

    return(
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList, findItem, editTask, editItem}}>
            {props.children}            
        </TaskListContext.Provider>
    )
};

// we're exporting the component , tat uses the createContext state
export default TaskListContextProvider;
