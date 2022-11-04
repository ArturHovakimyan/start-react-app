import React from "react";

const DummyTodo = ({ children, id, onDelete }) => {
  return (
    <div>
      {children}
      <button onClick={() => onDelete(id)}>X</button>
    </div>
  );
};

export default DummyTodo;
