import { useState } from 'react';
import './App.css';
import Header from './comps/Header'
import Tasks from './comps/Tasks';

const App = () => {
  const [tasks, setTasks] = useState(
    [
      { id: 1, title: 'title 1' },
      { id: 2, title: 'title 2' },
      { id: 3, title: 'title 3' },
    ]
  );

  const deleteTask = (id) => {
    console.log('delete', id);
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />

      <Tasks tasks={tasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
