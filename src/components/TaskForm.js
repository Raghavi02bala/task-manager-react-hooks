import React,{useContext, useState, useEffect} from 'react';
import {TaskListContext} from "../context/TaskListContext";

const TaskForm = () => {
    // destructuring array in js
    const { addTask, clearList, editTask, editItem } = useContext(TaskListContext);
    
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
        if(!editItem){
            addTask(title);
            setTitle("");
        } else{
            editTask(title,editItem.id);
        }       

    };

    useEffect(() => {
        if(editItem){
            setTitle(editItem.title);
            console.log(editItem);
        }
        else{
            setTitle("");
        }
    }, [editItem]);
    
    // vv.imp We have not done anything to task button, if u click both buttons the title will be added
    // coz it is done for the whole form, we have just overiden the clear button onClick

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
                    {editItem ? 'Edit Task' : 'Add Task'}
                </button>
                <button
                onClick={clearList} 
                className="btn
                clear-btn">
                    Clear
                </button>
            </div>
        </form>
    );
}

export default TaskForm;
