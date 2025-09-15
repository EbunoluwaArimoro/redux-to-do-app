import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../todosSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(s => s.todos.filter);

  const btn = (value, label) => (
    <button
      onClick={() => dispatch(setFilter(value))}
      style={{
        padding: "8px 12px",
        borderRadius: 8,
        border: filter === value ? "2px solid #111" : "1px solid #ccc",
        background: filter === value ? "#f5f5f5" : "#fff",
        cursor: "pointer"
      }}
    >
      {label}
    </button>
  );

  return (
    <div style={{ display: "flex", gap: 8, margin: "16px 0" }}>
      {btn("all", "All")}
      {btn("done", "Done")}
      {btn("not", "Not done")}
    </div>
  );
}
