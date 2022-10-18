export const Task = (props) => {
  const {
    setFormInput,
    tasklist,
    setTasklist,
    setTaskIdToEdit,
    task,
  } = props;
 

  //Task complete, delete, edit
  const completeTask = (id) => {
    setTasklist(
      tasklist.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };

  const deleteTask = (id) => {
    setTasklist(tasklist.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    console.log("editTask");
    setTasklist(
      tasklist.map((task) => {
        console.log("called setTaskIdToEdit", task.id)

        if (task.id === id) {
          setTaskIdToEdit(task.id);
          setFormInput(task.name);

          return { ...task, editing: true };
        } else {
          return { ...task, editing: false};
        }
      })
    );
  };


  //task view button handling

  const handleDone = () => {
    completeTask(task.id);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    console.log("handleedit")

    editTask(task.id);
  };

  const handleChange = (event) => {
    setFormInput(event.target.value);
  };

  return (
    <div
      className={
        task.completed ? "task completed-style" : "task uncompleted-style"
      }
    >
      <a className="task-name">{task.name}</a>

      <button className="done-button" onClick={handleDone}>
        {" "}
        Done{" "}
      </button>
      <button className="delete-button" onClick={handleDelete}>
        {" "}
        Delete{" "}
      </button>
      <button className="edit-button" onClick={handleEdit}>
        {" "}
        Edit {task.editing.toString()}{" "}
      </button>
      <a className="task-id">Task id: {task.id}</a>
    </div>
  );
};