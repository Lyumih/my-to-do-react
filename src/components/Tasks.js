import React from 'react'
import PropTypes from 'prop-types'
import TasksListHeader from './TasksListHeader'
import TasksList from './TasksList'

const Tasks = ({ tasks=[], onDone=f=>f, onRemove=f=>f }) => {
    return (
        <div>
            <TasksListHeader nameTaskList="Текущие дела" />
            <TasksList tasks={tasks} 
                onDone={onDone} 
                onRemove = {onRemove}/>
        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array.isRequired,
    onDone: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default Tasks