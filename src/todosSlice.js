import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: "1", description: "Sample task", isDone: false },
  ],
  filter: "all", // all | done | not
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(description) {
        return { payload: { id: nanoid(), description, isDone: false } };
      },
    },
    toggleDone(state, action) {
      const t = state.items.find(x => x.id === action.payload);
      if (t) t.isDone = !t.isDone;
    },
    editTask(state, action) {
      const { id, description } = action.payload;
      const t = state.items.find(x => x.id === id);
      if (t) t.description = description;
    },
    setFilter(state, action) {
      state.filter = action.payload; // "all" | "done" | "not"
    },
    deleteTask(state, action) {
      state.items = state.items.filter(x => x.id !== action.payload);
    },
  },
});

export const { addTask, toggleDone, editTask, setFilter, deleteTask } = todosSlice.actions;
export default todosSlice.reducer;
