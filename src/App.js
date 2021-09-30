import "./styles.css";
import React, { useState } from "react";
import Task from "./Task";
import data from "./data";
import { nanoid } from "nanoid";
export default function App() {
  const [Tasks, setTasks] = useState(data);
  const [addTask, setaddTask] = useState({
    message: ""
  });
  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addTask };
    newFormData[fieldName] = fieldValue;
    setaddTask(newFormData);
  };
  const handleFormOnSubmit = (event) => {
    event.preventDefault();
    const new_task = {
      id: nanoid(),
      message: addTask.message
    };
    const newTasks = [...Tasks, new_task];
    setTasks(newTasks);
  };
  return (
    <div className="App">
      <div className="input-c">
        <input
          type="text"
          name="message"
          required="required"
          placeholder="Add Task"
          onChange={handleAddFormChange}
        />
        <button onClick={handleFormOnSubmit} className="add">
          Add
        </button>
      </div>
      <div id="task-container">
        {Tasks.map((taskk) => (
          <Task text={taskk.message} />
        ))}
      </div>
    </div>
  );
}
