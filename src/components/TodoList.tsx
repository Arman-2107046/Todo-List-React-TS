import { useState } from "react";
import { useStore } from "../store/create";

const TodoList = () => {
  const { todos, addTodo, removeTodo, toggleTodo } = useStore();

  const [inputValue, setInputValue] = useState("");

  function handleAddTodo() {
    if (inputValue.trim() === "") {
      return;
    }

    addTodo({ id: Date.now(), text: inputValue, completed: false });

    setInputValue("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 shadow-lg w-full max-w-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Todo List
        </h1>

        <div className="flex items-center mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new to-do"
            className="flex-grow px-4 py-2 border rounded-l-lg border-gray-300 focus-outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Add
          </button>
        </div>

        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-gray-50 rounded-lg shadow-sm "
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                className="mr-2 form-checkbox h-5 w-5 text-blue-600"
              />
              <span
                className={`${
                  todo.completed
                    ? "line-through text-gray-400"
                    : "text-gray-700"
                }`}
              >
                {todo.text}
              </span>

              <button
                onClick={() => removeTodo(todo.id)}
                className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
