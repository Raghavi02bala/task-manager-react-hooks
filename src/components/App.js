import React from 'react';
import TaskList from './TaskList';
import "../App.css";
import TaskListContextProvider from "../context/TaskListContext";

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <TaskList/>
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
