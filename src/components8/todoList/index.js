import React, { useState } from "react";
import Todo from "../todo";
import "./style.css";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todoes, setTodoes] = useState([]);

  const addTodo = () => {
    setTodoes((prev) => [
      ...prev,
      { title: inputValue, id: Math.random(), isDone: false },
    ]);
    setInputValue("");
  };

  const deleteTodo = (id) => {
    setTodoes((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, newTitle) => {
    setTodoes((prev) =>
      prev.map((todo) => {
        if (todo.id == id) {
          todo.title = newTitle;
        }
        return todo;
      })
    );
  };

  const completeTodo = (id) => {
    setTodoes((prev) =>
      prev.map((todo) => {
        if (todo.id == id) {
          todo.isDone = !todo.isDone;
        }
        return todo;
      })
    );
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="toduListWrapper">
      <div className="toduList">
        <div className="addTodo">
          <input className="input" value={inputValue} onChange={handleInputChange} type="text" />
          <button className="button" disabled={!inputValue} onClick={addTodo}>
            Add Todo
          </button>
        </div>
        <div className="todoes">
          {todoes.map((item) => (
            <Todo
              key={item.id}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
