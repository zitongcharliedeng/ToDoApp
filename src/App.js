import React, { useState } from "react";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import "./styles/App.css";
import axios from "axios";

function App() {
  const [formInput, setFormInput] = useState("");
  const [taskIdToEdit, setTaskIdToEdit] = useState(undefined);
  const [tasklist, setTasklist] = useState([]);

  console.log(tasklist);
  
  axios
    .post("/api/version1/users", {
      name: "bob",
      password: "BOB123",
    })
      .then(function (response) {
        console.log(response);
      })
        .catch(function (error) {
          console.log(error);
        });
  
  return (
    <div className="app">
      <div className="taskform">
        <TaskForm
          formInput={formInput}
          setFormInput={setFormInput}
          taskIdToEdit={taskIdToEdit}
          setTaskIdToEdit={setTaskIdToEdit}
          tasklist={tasklist}
          setTasklist={setTasklist}
        />
      </div>
      <div className="tasklist">
        <TaskList
          formInput={formInput}
          setFormInput={setFormInput}
          taskIdToEdit={taskIdToEdit}
          setTaskIdToEdit={setTaskIdToEdit}
          tasklist={tasklist}
          setTasklist={setTasklist}
        />
      </div>

     
    </div>

     
  );
}

export default App;
