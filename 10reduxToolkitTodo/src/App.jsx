import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-2xl text-amber-50">Redux toolkit based Todo</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
