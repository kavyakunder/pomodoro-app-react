import React from "react";
import "./modal.css";
function Modal({ id, name, description, timer, breakTimer, deleteTodo }) {
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

export default Modal;
