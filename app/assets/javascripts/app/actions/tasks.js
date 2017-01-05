import axios from 'axios'

export const FETCH_TASKS = 'FETCH_TASKS';
export const CREATE_TASK = 'CREATE_TASK';

export function fetchTasks(){
  const request = axios.get('/api/v1/tasks');

  return {
    type: FETCH_TASKS,
    payload: request
  };
}

export function createTask(props){
  const request = axios.post('/api/v1/tasks', props);

  return {
    type: CREATE_TASK,
    payload: request
  };
}
