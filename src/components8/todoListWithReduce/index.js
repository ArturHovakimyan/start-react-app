import React, { useReducer } from "react";
import DummyTodo from "../dummyTodo";

const initialState = {
  input: "",
  todos: [],
  editMode: {
    todoId: "",
    isEditMode: false,
    editedTodo: "",
  },
};

const ACTION_TYPES = {
  ADD_TODO: "ADD_TODO",
  EDIT_TODO: "EDIT_TODO",
  DELETE_TODO: "DELETE_TODO",
  UPDATE_INPUT: "UPDATE_INPUT",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO: {
      return { ...state, input: "", todos: [...state.todos,
          { id: Math.random(), title: state.input, isDone: false },
        ],
      };
    }
    case ACTION_TYPES.UPDATE_INPUT: {
      return { ...state, input: action.payload.inputValue };
    }
    case ACTION_TYPES.DELETE_TODO: {
        const {payload :{id}} = action
      return { ...state, todos: state.todos.filter(todo => todo.id !== id) };
    }
    default:
       return state;
  }
};
const ToduListWrapper = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
const onDelete =(id) =>{
    dispatch({type: ACTION_TYPES.DELETE_TODO, payload:{id:id}})
}
  return (
    <div>
      <input
        value={state.input}
        type="text"
        onChange={(event) =>
          dispatch({
            type: ACTION_TYPES.UPDATE_INPUT,
            payload: { inputValue: event.target.value },
          })
        }
      />
      <button
        onClick={() =>dispatch({type: ACTION_TYPES.ADD_TODO})}
      >
        Trigger Action
      </button>
      <div>
        {state.todos.map(todo => <DummyTodo onDelete={onDelete} {...todo} key={todo.id}>{todo.title}</DummyTodo>)}
      </div>
    </div>
  );
};

export default ToduListWrapper;
