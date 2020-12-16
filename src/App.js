import React, { useState } from "react";
import TodoList from "./TodoList";

export default function App() {
  // state = {
  //   todos: [
  //     {id: 1, title: 'First todo', completed: false},
  //     {id: 2, title: 'Second todo', completed: true},
  //   ]
  // }
  const [todos, setTodos] = useState([
    { id: 1, title: "First todo", completed: false },
    { id: 2, title: "Second todo", completed: true },
  ]);

  const [todoTitle, setTodoTitle] = useState("");

  const addTodoTitle = (event) => {
    if (event.key === "Enter") {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          title: todoTitle,
          complete: false,
        },
      ]);
      setTodoTitle("");
    }
  };

  return (
    <div className="container">
      <h1>Todo app</h1>

      <div className="input-field">
        <input
          type="text"
          value={todoTitle}
          onChange={(event) => setTodoTitle(event.target.value)}
          onKeyDown={addTodoTitle}
        />
        <label>Todo name</label>
      </div>

      <TodoList todos={todos} />
    </div>
  );
}
