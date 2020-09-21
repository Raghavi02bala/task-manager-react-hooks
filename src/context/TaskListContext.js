import React, { createContext, UseState } from 'react'

// the const name can be anything ,and this line will create a context for it.
export const TaskListContext = createContext()

// This is just a component tat will include this state , again const name can be anything
const TaskListContextProvider = () => {
    const [task, setTasks] = useState([ 
        {task:'Read the book', id:1},
        {task:'Wash the car', id:2},
        {task:'Write some Code', id:3}
    ]);

    return <div>Task List Context</div>
};

// we're exporting the component , tat uses the createContext state
export default TaskListContextProvider;
