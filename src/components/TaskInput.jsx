// TaskInput.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

const TaskInput = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Add new task"
        value={task}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmit}>Add Task</button>
    </div>
  );
};

export default TaskInput;
