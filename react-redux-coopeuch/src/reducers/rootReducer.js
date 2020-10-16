import { ADD_TASK, DELETE_TASK } from '../actions/actionCreator';

const initState=[];
const taskfn=(action)=>{
    return{
        task:action.task,
        id:Math.random()
    }
}
const deleteByID=(state=initState,id)=>{
    const tasks=state.filter(task=>{
        return task.id!==id;
    })
    return tasks;
}
const tasks=(state=initState,action)=>{
    let tasks=null;
    switch(action.type){
        case ADD_TASK:
            tasks=[...state,taskfn(action)]
        return tasks;
        case DELETE_TASK:
            tasks=deleteByID(state,action.id)
            return tasks;
        default:
            return state;
    }
}

export default tasks;