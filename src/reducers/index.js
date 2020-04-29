import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [
    {
      id: uuidv4(),
      name: "Go to the gym",
      complete: false,
    },
    {
      id: uuidv4(),
      name: "Do laundry",
      complete: true,
    },
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
