import React,{useContext,useState} from 'react';
import {TaskListContext} from "../context/TaskListContext";

function TaskForm() {
    // destructuring array in js
    const { addTask } = useContext(TaskListContext);
    
    // we need to set the current state , so we're using state and we will also use to update the state

    const [title, setTitle] = useState('')

    // We're passing the event object "e" , as the parameter. the event here is input the value
    const handleChange = e => {
        // we're using set title to grab the input value and store it.
        setTitle(e.target.value);
    };

    const handleSubmit = e => {
        // the defualt action of the submit button is tat it reloads the page, here we're 
        // preventing the defualt action of reloading
        e.preventDefault();
        addTask(title);
        setTitle("");       

    };
    

    return (
        <form onSubmit={handleSubmit} className="form">
            <input  
            onChange={handleChange} 
            type="text"  
            value={title}   
            className="task-input"
            placeholder="Add Task...." 
            required
            />
            <div className="buttons">
                <button 
                type="submit" 
                className="btn
                add-task-btn">
                    Add Task
                </button>
                <button className="btn
                clear-btn">
                    Clear
                </button>
            </div>
        </form>
    );
}

export default TaskForm;
