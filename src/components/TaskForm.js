
export const TaskForm = (props) => {
  const {
    formInput,
    setFormInput,
    tasklist,
    setTasklist,
    taskIdToEdit,
    setTaskIdToEdit,
  } = props;

  const handleChange = (event) => {
    setFormInput(event.target.value);
  };

  const taskSubmitAdd = () => {
    const task = {
      id: tasklist.length === 0 ? 1 : tasklist[tasklist.length - 1].id + 1,
      name: formInput,
      completed: false,
      editing: false,
    };
    setTasklist(task.name !== "" ? [...tasklist, task] : tasklist);
    setFormInput("");
  };

  const taskSubmitEdit = () => {
    setTaskIdToEdit(undefined);
    setFormInput("");
    setTasklist(
      tasklist.map((task) => {
        if (task.id === taskIdToEdit) {
          return { ...task, editing: false, name: formInput };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <div>
      <input
        className={taskIdToEdit ? "input-box-yellow" : "input-box-white"}
        onChange={handleChange}
        placeholder={taskIdToEdit ? "Edit the task here" : "Add a task here"}
        value={formInput}
      />

      <button
        className="submit-button"
        onClick={taskIdToEdit ? taskSubmitEdit : taskSubmitAdd}
      >
        {taskIdToEdit ? "Submit edit here" : "Submit add here"}
      </button>

      <a> taskIdToEdit: {taskIdToEdit}</a>
      {console.log(tasklist)}
    </div>
  );
};
