import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react"

function App() {

const [tasks, setTasks] = useState([]);
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');



//Fetch all tasks on load

useEffect(()=> {
  fetchTasks()
}, []);


const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json();
  setTasks(data);
}


const addTask = async (e) => {
  e.preventDefault();
  await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({title, description}),
  })
  setTitle('');
  setDescription('');
  fetchTasks();
}


const updateStatus = async (id, newStatus) => {
  await fetch (`http://localhost:5000/tasks/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify({status: newStatus}),
  });
  fetchTasks();
}

const deleteTask = async (id) => {
  await fetch (`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});
  fetchTasks();
}

 
  return (
    <div className="app-container">
  <h1>Team Task Tracker</h1>

  <form onSubmit={addTask} className="task-form">
    <input
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Task title"
      required
    />
    <input
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      placeholder="Task description"
    />
    <button type="submit">Add Task</button>
  </form>

  <div className="task-list">
    {tasks.map((task) => (
      <div className="task-card" key={task.id}>
        <div className="task-header">
          <h3>{task.title}</h3>
          <span className={`status ${task.status}`}>
            {task.status}
          </span>
        </div>

        <p className="task-desc">{task.description}</p>

        <div className="task-actions">
          <button onClick={() => updateStatus(task.id, "in-progress")}>
            In Progress
          </button>
          <button onClick={() => updateStatus(task.id, "done")}>
            Done
          </button>
          <button className="delete" onClick={() => deleteTask(task.id)}>
            Delete
          </button>
        </div>
      </div>
    ))}
  </div>
</div>
  );
}

export default App;
