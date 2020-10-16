import { createStore, applyMiddleware } from "redux";
import task from '../reducer/task';
import thunk from 'redux-thunk';
 
export default () => {
    return createStore(task, applyMiddleware(thunk));
};