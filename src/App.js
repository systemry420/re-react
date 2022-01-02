import { useState } from 'react';
import './App.css';
import AddTask from './comps/AddTask';
import Header from './comps/Header'
import Tasks from './comps/Tasks';

const App = () => {
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

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask />

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
