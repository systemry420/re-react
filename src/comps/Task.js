import React from 'react'

const Task = ({task, deleteTask}) => {
    return (
        <div className='task'>
            <h3>{task.id} - {task.title}
                <pre 
                    style={{ color: 'red' }}
                    onClick={() => deleteTask(task.id)} 
                >X</pre>
            </h3>
        </div>
    )
}

export default Task
