import React from 'react'
import PropTypes from 'prop-types'

const AddTaskForms = ({onNewTask=f=>f}) => {

    let _task

    const handleSubmit = e => {
        e.preventDefault()
        onNewTask(_task.value)
        _task.value = ''
        _task.focus()
    }

    return(
        <form onSubmit={handleSubmit}>
            <p>Добавить новую задачу</p>
            <input ref={input => _task = input}
                type="text"
                placeholder="Сделать ..."
                required/>
            <button type="submit" >+</button>
        </form>
    )
}

AddTaskForms.propTypes = {
    onNewTask: PropTypes.func.isRequired
}

export default AddTaskForms