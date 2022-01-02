import React from 'react'
import { useState } from 'react';

const AddTask = ({ addTask }) => {

    const [title, setTitle] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();

        if (title === '') {
            alert('please fill title')
            return
        }
        
        addTask(title)
        setTitle('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Title</label>
                <input 
                    type='text' 
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Add New Task' />
            </div>

            <div className='form-control'>
                <input className='btn' type={"submit"} value={"Add task"} />
            </div>
        </form>
    )
}

export default AddTask
