import Task from "./Task"

const Tasks = ({ tasks }) => {
    return (
        <div>
            {
                tasks.map(
                    (task) => (
                        <Task key={task.id} task={task.title} />
                    )
                )
            }
        </div>
    )
}

export default Tasks
