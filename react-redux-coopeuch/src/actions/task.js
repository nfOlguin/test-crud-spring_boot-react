import axios from '../axios/axios';


 //_________________________________________________________________
 //genero Action create
const _addTask = (task) => ({
    type: 'ADD_TASK',
    task
});
 
export const addTask = (taskData = {
    id: '',
    descripcion: '',
    fechaCreacion: '',
    vigente: 0
}) => {
    return (dispatch) => {
        const task = {
            id: taskData.id,
            descripcion: taskData.descripcion,
            fechaCreacion: taskData.fechaCreacion,
            vigente: taskData.published
        };
 
        return axios.post('tasks/create', task).then(result => {
            dispatch(_addTask(result.data));
        });
    };
};

 //_________________________________________________________________
//genero Action remove

const _removeTask = ({ id } = {}) => ({
    type: 'REMOVE_TASK',
    id
});
 
export const removeTask = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`tasks/${id}`).then(() => {
            dispatch(_removeTask({ id }));
        })
    }
};
 
 //_________________________________________________________________
//genero Action update
const _editTask = (id, updates) => ({
    type: 'EDIT_TASK',
    id,
    updates
});
 
export const editTask = (id, updates) => {
    return (dispatch) => {
        return axios.put(`tasks/${id}`, updates).then(() => {
            dispatch(_editTask(id, updates));
        });
    }
};
 
 //_________________________________________________________________
//genero Action getAll
const _getTasks = (tasks) => ({
    type: 'GET_TASKs',
    tasks
});
 
export const getTasks = () => {
    return (dispatch) => {
        return axios.get('tasks').then(result => {
            const tasks = [];
 
            result.data.forEach(item => {
                tasks.push(item);
            });
 
            dispatch(_getTasks(tasks));
        });
    };
};