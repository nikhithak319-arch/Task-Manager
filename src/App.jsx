import React, { useEffect, useState } from 'react'
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import ProgressTracker from './Components/ProgressTracker'

export default function App() {
  const[tasks, setTasks] = useState([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  });

  const addTask = (task) => {
    setTasks([...tasks,task]);
  }
  
  const updateTask = (updatedTask, index) => {
   const newtasks = [...tasks];
   newtasks[index] = updatedTask;
   setTasks(newtasks);
  }

  const deleteTask = (index) => {
setTasks(tasks.filter((_ , i) => i!= index))
  }

  return (
    <div>
      <h1>Task Buddy</h1>
      <h4><i> the friendly task manager</i></h4>
      <Taskform addTask={addTask}/>
      <Tasklist tasks={tasks}
       updateTask = {updateTask}
       deleteTask = {deleteTask}/>
      <ProgressTracker />
    </div>
  )
}
