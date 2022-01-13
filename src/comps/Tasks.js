import React from "react"
import { ThemeContext } from "../contexts/ThemeContext"
import Task from "./Task"

class Tasks extends React.Component {
  static contextType = ThemeContext;

  render() {
    const { isDark, dark, light } = this.context;
    const theme = isDark ? dark : light;

    return (
      <div style={{ background: theme.background }}>
        {
          this.props.tasks.map(
            (task, index) => (
              <Task 
                key={index} task={task} 
                deleteTask={this.props.deleteTask}/>
            )
          )
        }
      </div>
    )
  }
}

export default Tasks
