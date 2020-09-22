import React from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "../App.css";
import TaskListContextProvider from "../context/TaskListContext";
import Header from "./Header";


function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <div className="main">
            <Header/>
            <TaskForm/>
            <TaskList/>
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
