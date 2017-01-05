import React, { Component, PropTypes } from 'react';
import { reduxForm, Field } from 'redux-form';
import { createTask } from '../actions/tasks';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class TaskForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  onSubmit(task) {
    this.props.createTask(task).then(() => {
      this.context.router.push('/');
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return(
      <div className="container">
        <form onSubmit={handleSubmit(this.onSubmit.bind(this)) }>
          <div  className="form-group">
            <label>Title</label>
            <Field name="title" component="input" type="text" className="form-control"/>
          </div>

          <div  className="form-group">
            <label>Content</label>
            <Field name="content" component="textarea" className="form-control"/>
          </div>

          <div  className="form-group">
            <label>
              Completed
              <Field name="completed" component="input" type="checkbox"/>
            </label>
          </div>

          <button className="btn btn-primary">Create task</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTask } , dispatch);
}

TaskForm = reduxForm({
  form: 'TaskForm',
  fields: ['title', 'content', 'completed']
})(TaskForm)

export default connect(null, mapDispatchToProps)(TaskForm);
