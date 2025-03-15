import React, { useEffect, useRef } from "react";
import "./index.scss";
function TodoList() {
  const [task, setTask] = React.useState(() => {
    const saved = localStorage.getItem("task");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });
  const [newTask, setNewTask] = React.useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [newTask]);

  function handleInputChange(e) {
    const target = e.target;
    setNewTask(target.value);
  }

  function addTask() {
    newTask.trim() != ""
      ? setTask((task) => [...task, newTask]) & setNewTask("")
      : "";
  }

  const deleteTask = (index) => {
    const updateTasks = task.filter((_, i) => i != index);
    setTask(updateTasks);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task));
  }, [task]);

  return (
    <>
      <div className="task__create">
        <input
          ref={inputRef}
          type="text"
          placeholder="Какую задачу хотите решить сегодня...."
          value={newTask}
          onChange={handleInputChange}
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul className="task__list">
        {task.map((task, index) => (
          <li className="task" key={index}>
            <div>
              <input className="task__checkbox" type="checkbox" id={index} />
              <label htmlFor={index}>{task}</label>
            </div>
            <button className="task__delete" onClick={() => deleteTask(index)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
