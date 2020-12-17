import React, { useContext, useEffect } from "react";
import { Context } from "./context";

export default function TodoItem({ title, id, completed }) {
  const { removeTodo, toggleTodo } = useContext(Context);

  // const [checked, setChecked] = useState(completed);
  const cls = ["todo"];

  useEffect(() => {
    console.log("Render todoitem");
  }, []);
  if (completed) {
    cls.push("completed");
  }

  return (
    <li className={cls.join(" ")}>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleTodo(id)}
        />
        <span>{title}</span>

        <i className="material-icons red-text" onClick={() => removeTodo(id)}>
          delete
        </i>
      </label>
    </li>
  );
}
