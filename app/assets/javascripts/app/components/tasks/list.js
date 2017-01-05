import React, { Component } from 'react';
import { Link } from 'react-router';
import TaskListItem from './list-item';

export default class TaskList extends Component{

  renderTasks(){
    if(this.props.tasks.length == 0){
      return(
        <div className="container">
          <div className="jumbotron text-center">
            <h3>You have 0 tasks</h3> 
              <Link to="/tasks/new" className="btn btn-primary">
                Create your first task
              </Link>
          </div>
        </div>
      )
    }

    return(
      <div>
        <ul className="list-group">
          { this.props.tasks.map((task) => <TaskListItem key={task.id} task={task}/> )}
        </ul>
        <Link to="/tasks/new" className="btn btn-primary">
          Add task
        </Link>
    </div>
    )
  }

  render(){
    return(
      <div>
        <h2 className="text-center">List of tasks</h2>
        {this.renderTasks()}
      </div>
    );
  }
}
