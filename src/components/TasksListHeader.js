import React from 'react'
import PropTypes from 'prop-types' 

const TasksListHeader = ({nameTaskList="List name"}) => {
    return <h3>{nameTaskList}</h3>
}

TasksListHeader.propTypes = {
    nameTaskList: PropTypes.string.isRequired
}

export default TasksListHeader