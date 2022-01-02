import Task from "./Task"

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <div>
      {
        tasks.map(
          (task, index) => (
            <Task key={index} task={task} deleteTask={deleteTask}/>
          )
        )
      }
    </div>
  )
}

export default Tasks
