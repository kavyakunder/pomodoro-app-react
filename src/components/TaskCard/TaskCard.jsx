import React from "react";
import { Link } from "react-router-dom";
import "./taskCard.css";
function TaskCard({ id, name, description, timer, breakTimer, deleteTodo }) {
  return (
    <>
      <Link
        to="/pomodoro"
        state={{
          name: name,
          description: description,
          timer: timer,
          breakTimer: breakTimer,
        }}
      >
        <div className="note">
          <h1> This is the title- {name}</h1>
          <p>This is description- {description}</p>
          <p>This is work timer- {timer}</p>
          <p>This is break timer- {breakTimer}</p>
          <button className="btn-add" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </div>
      </Link>
    </>
  );
}

export default TaskCard;
