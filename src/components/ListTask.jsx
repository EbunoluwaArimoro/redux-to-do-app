import { useSelector } from "react-redux";
import Task from "./Task";

export default function ListTask() {
  const { items, filter } = useSelector(s => s.todos);

  const filtered = items.filter(t => {
    if (filter === "done") return t.isDone;
    if (filter === "not") return !t.isDone;
    return true;
  });

  if (filtered.length === 0) return <p>No tasks.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 8 }}>
      {filtered.map(t => (
        <li key={t.id}>
          <Task task={t} />
        </li>
      ))}
    </ul>
  );
}
