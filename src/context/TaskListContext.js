import React, { createContext, useState, useEffect } from 'react';
import  uuid  from 'uuid';

// the const name can be anything ,and this line will create a context for it.
export const TaskListContext = createContext()

// This is just a component tat will include this state , again const name can be anything
const TaskListContextProvider = props => {
    // even though i pass an empty array and store, it disappears after refreshing.so this is to store the array
    // getItem , gts the array frm local storage and stores it as initial state
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []    

    const [tasks, setTasks] = useState(initialState);

    useEffect(() =>{
        // we are storing the tasks localy , and it takes 2 args ,one is the titile and 
        // the other is the arry
        // here we have converted the array to JSON format
        localStorage.setItem('tasks',JSON.stringify(tasks))

    },[tasks]);

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
        setEditItem(null);
    };

    return(
        <TaskListContext.Provider value={{tasks, addTask, removeTask, clearList, findItem, editTask, editItem}}>
            {props.children}            
        </TaskListContext.Provider>
    )
};

// we're exporting the component , tat uses the createContext state
export default TaskListContextProvider;
