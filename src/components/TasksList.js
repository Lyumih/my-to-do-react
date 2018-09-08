import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'

const TasksList = ({tasks=[], onDone=f=>f, onRemove=f=>f}) => {
    console.log(tasks)
    return (
        <ul>
            {tasks.map((task, i) => 
                // <button onClick={onRemove}>X</button>
                // <span/>
                <li key={i} >
                    
                    <Task {...task} onDone={(done) => onDone(task.id, done)}/> <button onClick={() => onRemove(task.id)}>X</button> 
                </li>)
            }
        </ul>)
}

TasksList.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDone: PropTypes.func.isRequired
}

export default TasksList