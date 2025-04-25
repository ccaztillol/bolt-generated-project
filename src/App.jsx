import React, { useState } from 'react';
    import './index.css';

    function App() {
      const [todos, setTodos] = useState([]);
      const [input, setInput] = useState('');

      const handleAddTodo = () => {
        if (input.trim()) {
          setTodos([...todos, input]);
          setInput('');
        }
      };

      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <h1 className="text-4xl font-bold mb-8">Todo App</h1>
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add a new todo..."
              className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:border-blue-500"
            />
            <button onClick={handleAddTodo} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add Todo
            </button>
          </div>
          <ul className="mt-8 w-full max-w-sm">
            {todos.map((todo, index) => (
              <li key={index} className="bg-white p-4 rounded-lg shadow-md mb-2 flex items-center justify-between">
                <span>{todo}</span>
                <button onClick={() => setTodos(todos.filter((_, i) => i !== index))} className="text-red-500 hover:text-red-600">Delete</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }

    export default App;
