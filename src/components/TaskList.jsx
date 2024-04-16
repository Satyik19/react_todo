// TaskList.js
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../redux/actions";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li className="task" key={task.id}>
          <span className="task-text">{task.text}</span>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
