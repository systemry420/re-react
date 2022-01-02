import { useState } from 'react';
import './App.css';
import AddTask from './comps/AddTask';
import Header from './comps/Header'
import Tasks from './comps/Tasks';

const App = () => {
  const [showForm, setShowForm] = useState(false)
  const [tasks, setTasks] = useState(
    [
      { id: 1, title: 'abcd' },
      { id: 2, title: 'efgh' },
      { id: 3, title: 'ijklmn' },
    ]
  );

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  const addTask = (title) => {
    const id = Math.floor(Math.random() * 100)
    const obj = {id, title}

    setTasks([...tasks, obj])
  }

  return (
    <div className="container">
      <Header 
        onShowForm={() => setShowForm(!showForm)} 
        showForm={showForm} 
        title="Task Tracker" 
      />

      {
        showForm ? <AddTask addTask={addTask} /> : ''
      }

      {
        tasks.length > 0 ? (
          <Tasks tasks={tasks} deleteTask={deleteTask}/>
        ) :
        (
          <h1>No tasks for now!!!</h1>
        )
      }
    </div>
  );
}

export default App;
