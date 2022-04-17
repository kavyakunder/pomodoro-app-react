import React from "react";
import "./taskCard.css";
function TaskCard({ id, name, description, timer, breakTimer, deleteTodo }) {
  return (
    <>
      <div className="note">
        <h1> This is the title- {name}</h1>
        <p>This is description- {description}</p>
        <p>This is work timer- {timer}</p>
        <p>This is break timer- {breakTimer}</p>
        <button className="btn-add" onClick={() => deleteTodo(id)}>
          Delete
        </button>
      </div>
    </>
  );
}

export default TaskCard;
