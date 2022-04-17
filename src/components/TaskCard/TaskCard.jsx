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
          <h1> Title is {name}</h1>
          <p>Description is {description}</p>
          <p> Work timer is {timer}</p>
          <p> Break timer is {breakTimer}</p>
          <button className="btn-add" onClick={() => deleteTodo(id)}>
            Delete
          </button>
        </div>
      </Link>
    </>
  );
}

export default TaskCard;
