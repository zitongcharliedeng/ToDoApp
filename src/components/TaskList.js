import { Task } from "./Task";
export const TaskList = (props) => {
  const { setFormInput, tasklist, setTasklist, setTaskIdToEdit } = props;

  const newarr = tasklist.map((task) => {
    return (
      <Task
        task={task}
        setFormInput={setFormInput}
        setTaskIdToEdit={setTaskIdToEdit}
        tasklist={tasklist}
        setTasklist={setTasklist}
      />
    );
  });
  return newarr;
};
