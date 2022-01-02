import React from 'react'

const AddTask = () => {
    return (
        <form className='add-form'>
            <div className='form-control'>
                <label>Title</label>
                <input type='text' placeholder='Add New Task' />
            </div>

            <div className='form-control'>
                <input className='btn' type={"submit"} value={"Add task"} />
            </div>
        </form>
    )
}

export default AddTask
