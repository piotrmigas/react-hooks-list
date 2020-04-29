import React from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../actions";
import { v4 as uuidv4 } from "uuid";

const TodoInput = () => {
  const [todo, setTodo] = React.useState("");

  const dispatch = useDispatch();

  const addTodo = (todo) => dispatch(addTodoAction(todo));

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() === "") return;
    addTodo({
      id: uuidv4(),
      name: todo,
      completed: false,
    });
    setTodo("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Add a todo..."
          value={todo}
          onChange={handleChange}
        />
        <button type="submit">Add Todo</button>
      </div>
    </form>
  );
};

export default TodoInput;
