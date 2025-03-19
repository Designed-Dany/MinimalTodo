import React, { useEffect, useRef } from "react";
import "./index.scss";
function TodoList() {
  const [task, setTask] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, [newTask]);

  function addTask() {
    if (newTask.trim()) {
      setTask([...task, { text: newTask, completed: false }]);
    }
    setNewTask("");
  }
  const deleteTask = (index) => {
    const updateTasks = task.filter((_, i) => i != index);
    setTask(updateTasks);
  };

  const taskCompletion = (index) => {
    const newTasks = task.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTask(newTasks);
  };

  return (
    <>
      <div className="task__create">
        <input
          ref={inputRef}
          type="text"
          placeholder="Какую задачу хотите решить сегодня...."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Добавить</button>
      </div>
      <ul className="task__list">
        {task.map((task, index) => (
          <li className="task" key={index}>
            <div>
              <input
                onClick={() => taskCompletion(index)}
                className="task__checkbox"
                type="checkbox"
                id={index}
              />
              <label htmlFor={index}>
                <p className={task.completed ? "task__strikethrough" : ""}>
                  {task.text}
                </p>
              </label>
            </div>
            <button className="task__delete" onClick={() => deleteTask(index)}>
              Удалить
            </button>
          </li>
        ))}
      </ul>
      <hr />
      <div className="task__completed">
        <h3>Завершенные задачи на сегодня: </h3>
        <ul>
          {task.map((task, index) =>
            task.completed ? (
              <li key={index}>
                <div>
                  <p>{task.text}</p>
                </div>
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
