import {ADD_TASK} from './actionCreator';
import {DELETE_TASK} from './actionCreator';

export const addTASK=(TASK)=>{
    const action={
        type:ADD_TASK,
        TASK
    }
    return action;
}

export const deleteTASK=(id)=>{
    const action={
        type:DELETE_TASK,
        id 
    }
    return action;
}