import { FETCH_TASKS } from '../actions/tasks';

export default function(state = {all: [], task: null } , action) {
  switch(action.type){
    case FETCH_TASKS:
      return { ...state, all: action.payload.data};
  }

  return state;
}

