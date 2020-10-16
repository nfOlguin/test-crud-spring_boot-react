import actionTypes from '../actionTypes';

const initialState = {
  tasks: []
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_TASK: {
      const tasks = [...state.tasks];
      tasks.push(action.task);
      return {
        tasks,
      }
    }
    case actionTypes.UPDATE_TASK: {
      const { index, task } = action;
      const tasks = [...state.tasks];
      tasks[index] = task;
      return {
        tasks,
      }
    }
    case actionTypes.DELETE_TASK: {
      const { index } = action;
      const tasks = [];
      state.tasks.forEach((task, i) => {
        if(index !== i) {
          tasks.push(task)
        }
      })      
      return {
        tasks,
      }
    }
    default:
      return state;
  }
}