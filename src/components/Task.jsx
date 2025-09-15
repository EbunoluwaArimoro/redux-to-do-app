import { useDispatch } from "react-redux";
import { toggleDone, editTask, deleteTask } from "../todosSlice";
import { useState } from "react";

export default function Task({ task }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [val, setVal] = useState(task.description);

  const save = () => {
    const v = val.trim();
    if (!v) return;
    dispatch(editTask({ id: task.id, description: v }));
    setIsEditing(false);
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: 12,
      border: "1px solid #e5e5e5",
      borderRadius: 10
    }}>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={() => dispatch(toggleDone(task.id))}
        aria-label="toggle done"
      />

      {isEditing ? (
        <input
          value={val}
          onChange={e => setVal(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter") save(); if (e.key === "Escape") setIsEditing(false); }}
          style={{ flex: 1, padding: 8, border: "1px solid #ddd", borderRadius: 8 }}
          autoFocus
        />
      ) : (
        <span style={{
          flex: 1,
          textDecoration: task.isDone ? "line-through" : "none",
          color: task.isDone ? "#888" : "#111"
        }}>
          {task.description}
        </span>
      )}

      {isEditing ? (
        <button onClick={save} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #111" }}>Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #111" }}>Edit</button>
      )}

      <button onClick={() => dispatch(deleteTask(task.id))} style={{ padding: "8px 12px", borderRadius: 8, border: "1px solid #d11" }}>
        Delete
      </button>
    </div>
  );
}
