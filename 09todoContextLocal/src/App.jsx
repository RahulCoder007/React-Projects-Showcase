import { useEffect, useState } from "react";
import { TodoProvider } from "./contexts";
import "./App.css";
import { TodoForm, TodoItem } from "./components";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (currentTodo) => {
    console.log(currentTodo, todos);
    setTodos((prev) => [{ id: Date.now(), ...currentTodo }, ...prev]); //id gets updated everytime whenever added new todo
  };
  const updateTodo = (id, currentTodo) => {
    console.log(id, currentTodo);
    setTodos((prev) =>
      prev.map((eachValTodo) =>
        eachValTodo.id === id ? currentTodo : eachValTodo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachValTodo) => eachValTodo.id != id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((eachValTodo) =>
        eachValTodo.id === id
          ? { ...eachValTodo, completed: !eachValTodo.completed }
          : eachValTodo
      )
    );
  };

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")); //it will return string so to preserve the array obj structure its parsed in json
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos)); // bcoz todos structure is array obj in usestate so lclstor always wants value in string format
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, updateTodo, deleteTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
