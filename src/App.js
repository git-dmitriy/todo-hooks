import React, { useState, useEffect, useReducer } from "react";
import TodoList from "./TodoList";
import { Context } from "./context";
import reducer from "./reducer";

export default function App() {
  // state = {
  //   todos: [
  //     {id: 1, title: 'First todo', completed: false},
  //     {id: 2, title: 'Second todo', completed: true},
  //   ]
  // }
  const [state, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos"))
  );

  // const [todos, setTodos] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");

  // useEffect(() => {
  //   const raw = localStorage.getItem("todos") || [];
  //   setTodos(JSON.parse(raw));
  // }, []);

  useEffect(() => {
    document.addEventListener("click", handleClick);

    localStorage.setItem("todos", JSON.stringify(state));

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [state]);
  // empty [] - emulate componentDidMount

  const addTodoTitle = (event) => {
    if (event.key === "Enter") {
      dispatch({
        type: "ADD",
        payload: todoTitle,
      });

      // setTodos([
      //   ...state,
      //   {
      //     id: Date.now(),
      //     title: todoTitle,
      //     complete: false,
      //   },
      // ]);
      setTodoTitle("");
    }
  };

  const handleClick = () => console.log("Click!");

  // const removeTodo = (id) => {
  //   setTodos(
  //     todos.filter((todo) => {
  //       return todo.id !== id;
  //     })
  //   );
  // };

  // const toggleTodo = (id) => {
  //   setTodos(
  //     todos.map((todo) => {
  //       if (todo.id === id) {
  //         todo.completed = !todo.completed;
  //       }
  //       return todo;
  //     })
  //   );
  // };

  return (
    <Context.Provider
      value={{
        dispatch,
        //  removeTodo, toggleTodo
      }}
    >
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

        <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}
