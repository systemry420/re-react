import React from 'react'

const Task = ({task}) => {
    return (
        <div className='task'>
            <h3>{task}
                <pre style={{ color: 'red' }}>X</pre>
            </h3>
        </div>
    )
}

export default Task
