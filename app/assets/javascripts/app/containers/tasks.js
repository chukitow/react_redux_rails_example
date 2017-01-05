import React, { Component } from 'react';
import TaskList from '../components/tasks/list';
import { fetchTasks } from '../actions/tasks'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class TaskContainer extends Component {
  componentWillMount(){
    this.props.fetchTasks();
  }

  render(){
    return(
      <div className="container">
        <TaskList tasks={this.props.tasks}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks.all };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTasks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
