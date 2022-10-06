import React, { useState } from "react";
import "./App.css";

function App() {
  const [editMode, setEditMode] = useState(false);
  const [formInput, setFormInput] = useState("");

  const [placeholderText, setPlaceholderText] = useState(
      editMode === false ? "Add a task here" : "Edit the task here"
    );

  const [buttonText, setButtonText] = useState(
      editMode === false ? "Submit add here" : "Submit edit here"
    );

  const handleChange = (event) => {
    setFormInput(event.target.value);
  };

  const [tasklist, setTasklist] = useState([]);

  return (
    <div>
      <div>
        <form>
          <input onChange={handleChange} placeholder={placeholderText} />

          <button onClick={setTasklist([...tasklist, formInput])}>
            {buttonText}
          </button>
        </form>
      </div>

      <div>
        <h1>{formInput}</h1>
        <h1>{tasklist}</h1>
      </div>
    </div>
  );
}

export default App;
