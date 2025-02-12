import { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => newTask.id !== id)); //filter le kol task el id bta3o msh nafs el id ely mab3otlo
  }

  return (
    <>
      <div className="bg-pink-200 shadow-xl container mx-auto mt-28 p-4 max-w-md rounded-lg border-pink-400 border-4">
        <h1 className="text-2xl text-center mb-4 text-pink-900 font-bold font-mono">
          To-Do List
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Add a new task.."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="font-mono flex-1 px-2 py-1 border-0 rounded outline-none"
          />
          <button
            onClick={addTask}
            className="add-btn text-center bg-pink-600 border-none text-white rounded-lg"
          >
            <span className="font-mono add-btn-txt">Add</span>
            <i class="fa-solid fa-check"></i>
          </button>
        </div>

        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between py-2 px-3 border-b border-pink-300 text-pink-950"
            >
              <h3 className="font-mono">{task.text}</h3>
              <button
                onClick={() => deleteTask(task.id)}
                className="text-red-500 hover:underline"
              >
                <i class="fa-solid fa-trash-can text-lg"></i>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
