import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TaskReducer from './tasks'

const rootReducer = combineReducers({
  tasks: TaskReducer,
  form: formReducer,
});

export default rootReducer;
