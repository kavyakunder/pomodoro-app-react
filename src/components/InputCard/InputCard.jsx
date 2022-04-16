import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./inputCard.css";

export default function InputCard({ saveToList }) {
  const [inputPomodoro, setInputPomodoro] = useState({
    taskName: "",
    taskDescription: "",
    taskTime: "",
    breakTime: "",
  });

  const appendTaskToList = (e) => {
    const task = {
      id: uuid(),
      name: inputPomodoro.taskName,
      description: inputPomodoro.taskDescription,
      timer: inputPomodoro.taskTime,
      breakTimer: inputPomodoro.breakTime,
    };

    saveToList(task);
    setInputPomodoro({
      taskName: "",
      taskDescription: "",
      taskTime: "",
      breakTime: "",
    });
    e.preventDefault();
  };

  function changeHandler(e) {
    const { name, value } = e.target;
    setInputPomodoro((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <form className="input-form">
      <input
        className="input"
        name="taskName"
        type="text"
        placeholder="Task name"
        value={inputPomodoro.taskName}
        onChange={changeHandler}
      />

      <textarea
        className="textarea"
        name="taskDescription"
        placeholder="Task Description "
        value={inputPomodoro.taskDescription}
        onChange={changeHandler}
      />

      <input
        className="input"
        type="number"
        name="taskTime"
        placeholder="Work Timer"
        value={inputPomodoro.taskTime}
        onChange={changeHandler}
      />

      <input
        className="input"
        name="breakTime"
        type="number"
        placeholder="Break Timer "
        value={inputPomodoro.breakTime}
        onChange={changeHandler}
      />
      <button className="btn-add" onClick={appendTaskToList}>
        Add
      </button>
    </form>
  );
}
