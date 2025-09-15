import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../todosSlice";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const submit = e => {
    e.preventDefault();
    const v = text.trim();
    if (!v) return;
    dispatch(addTask(v));
    setText("");
  };

  return (
    <form onSubmit={submit} style={{ display: "flex", gap: 8, marginTop: 12 }}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a new task"
        style={{ flex: 1, padding: 10, border: "1px solid #ddd", borderRadius: 8 }}
      />
      <button type="submit" style={{ padding: "10px 14px", borderRadius: 8, border: "1px solid #111" }}>
        Add
      </button>
    </form>
  );
}
