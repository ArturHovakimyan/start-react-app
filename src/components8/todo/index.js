import React, { useState } from "react";
import edit from "../../assets/edit.svg";
import deleteIcon from "../../assets/deleteTodo.svg";

const Todo = ({ title, id, isDone, deleteTodo, editTodo, completeTodo }) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTodo, setEditedTodo] = useState(title);
  const completeEdit = (event) => {
    event.stopPropagation()
    editTodo(id, editedTodo);
    resetEdit(event)
  };
  const resetEdit = (event) => {
    event.stopPropagation()
    setEditedTodo(title);
    setIsEditMode(false);
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  return (
    <div onClick={()=>completeTodo(id)} className={`todo ${isDone ? "done" : ""}`}>
      {isEditMode ? (
        <div>
          <input
            value={editedTodo}
            onChange={(event) => setEditedTodo(event.target.value)}
            type="text"
          />
          <button onClick={completeEdit}>V</button>
          <button onClick={resetEdit}>X</button>
        </div>
      ) : (
        <div>
          {title}
          <img onClick={handleEditClick} className="icon" src={edit} alt="" />
        </div>
      )}
      <img
        onClick={() => deleteTodo(id)}
        className="icon"
        src={deleteIcon}
        alt=""
      />
    </div>
  );
};

export default Todo;
