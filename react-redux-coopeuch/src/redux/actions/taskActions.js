import actionTypes from '../actionTypes';

export default {
  addTask: (task)=> ({
    type: actionTypes.ADD_TASK,
    task
  }),
  updateTask: (index, task) => ({
    type: actionTypes.UPDATE_TASK,
    index,
    task,
  }),
  deleteTask: (index) => ({
    type: actionTypes.DELETE_TASK,
    index
  })
}