import "./App.css";
import { TodoDetails } from "./components/TodoDetails";
import { Todo } from "./components/Todo";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todo />}></Route>
        <Route path="/todo/:id" element={<TodoDetails />}></Route>
      </Routes>
    </div>
  );
}

export default App;
