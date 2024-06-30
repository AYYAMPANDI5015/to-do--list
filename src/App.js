import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [tasks, setTasks] = useState(["eat", "sleep", "eat"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function taskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [updatedTasks[index - 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  function taskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
      setTasks(updatedTasks);
    }
  }

  return (
    <>
      <div className="todo">
        <h1>To-do List</h1>
        <div>
          <input 
            type="text" 
            placeholder="Enter your Task" 
            value={newTask} 
            onChange={handleInputChange} 
          />
          <button onClick={addTask} className="addtk">Add</button>
        </div>
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <span>{task}</span>
              <button onClick={() => deleteTask(index)} className="del">delete</button>
              <button onClick={() => taskUp(index)}>🔼</button>
              <button onClick={() => taskDown(index)}>🔽</button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
