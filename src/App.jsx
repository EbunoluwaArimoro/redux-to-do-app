import AddTask from "./components/AddTask";
import Filter from "./components/Filter";
import ListTask from "./components/ListTask";

export default function App() {
  return (
    <div style={{ maxWidth: 640, margin: "40px auto", padding: 16, fontFamily: "Inter, system-ui, Arial" }}>
      <h1>Redux ToDo</h1>
      <AddTask />
      <Filter />
      <ListTask />
    </div>
  );
}
