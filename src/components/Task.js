import React from 'react'
import PropTypes from 'prop-types'
import './../css/Task.css'

const Task = ({ task="name task" , done=false, onDone=f=>f}) => 
    <span onClick={onDone}
            className={(done) ? "done" : ""}>
            {task}
    </span>


Task.propTypes = {
    task: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    onDone: PropTypes.func.isRequired
}
export default Task 