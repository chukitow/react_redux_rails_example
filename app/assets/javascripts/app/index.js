import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise'
import reducers from './reducers'

import TasksContainer from './containers/tasks';
import TaskForm from './containers/task-form';

const store = applyMiddleware(promise)(createStore)

export default (() => {
  const App = () => {
    return(
      <Provider store={store(reducers)}>
        <Router history={browserHistory}>
          <Route path="/">
            <IndexRoute component={TasksContainer} />
            <Route path="/tasks/new" component={TaskForm} />
          </Route>
        </Router>
      </Provider>
    );
  }

  ReactDOM.render(<App />, document.getElementById('root'));
})();
