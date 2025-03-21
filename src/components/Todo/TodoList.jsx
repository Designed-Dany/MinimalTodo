import React, { useEffect, useRef } from "react";
import "./index.scss";
function TodoList() {
  const [task, setTask] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");
  const [toggleShow, setToggleShow] = React.useState(false);
  const inputRef = useRef(null);
  let completedTask = [];
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
    completedTask.push(task);
    console.log(completedTask);
    setTimeout(() => deleteTask(index), 1000);
    setTimeout(() => console.log(completedTask), 4000);
  };

  const showTask = () => {
    setToggleShow(!toggleShow);
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
        <div className="task__show">
          <button
            onClick={showTask}
            className={toggleShow ? "task__show_down" : "task__show_up"}
          >
            <img
              width={30}
              height={30}
              src="/src/components/Todo/down.png"
              alt=""
            />
          </button>
          <h3>Завершенные задачи на сегодня: </h3>
        </div>
        <ul className="old-task">
          {toggleShow
            ? completedTask.map((task, index) =>
                task.completed ? (
                  <li key={index}>
                    <div className="old-task_position">
                      &#10026;
                      <p>{task.text}</p>
                    </div>
                  </li>
                ) : (
                  ""
                )
              )
            : ""}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
