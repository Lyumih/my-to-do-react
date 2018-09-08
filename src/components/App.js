import React, { Component } from 'react';
import { v4 } from 'uuid'

import Header from './Header'
import AddTaskForm from './AddTaskForm'
import Tasks from './Tasks'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      tasks: []
    }
    this.addTask = this.addTask.bind(this)
    this.doneTask = this.doneTask.bind(this)
    this.removeTask = this.removeTask.bind(this)
  }

  addTask(task){
    console.log('Add new task:', task)
    const tasks = [
      ...this.state.tasks,
      {
        id: v4(),
        task,
        done: false
      }
    ]
    this.setState({tasks})
  }

  doneTask(id, done){
    console.log("Task is done!")
    const tasks = this.state.tasks.map(task =>
      (task.id !== id ) ?
        task :
        {
          ...tasks,
          done
        }
      )
      this.setState({tasks})
  }

  removeTask(id){
    const tasks = this.state.tasks.filter(
      task => task.id !== id
    )
    console.log('Remove task')
    console.log('Текущее состояние: ', {tasks} )
    this.setState({tasks})

  }

  render() {
    const { addTask, doneTask, removeTask} = this
    const { tasks } = this.state

    return (
      <div className="App">
        <Header nameLabel="TO-DO ON REACT" />
        <AddTaskForm onNewTask={addTask} />
        <Tasks tasks={tasks} 
          onDone={doneTask}
          onRemove={removeTask}/>
      </div>
    );
  }
}

export default App;
