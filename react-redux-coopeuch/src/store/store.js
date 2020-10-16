import { createStore, applyMiddleware } from "redux";
import Tasks from '../reducers/rootReducer';
import thunk from 'redux-thunk';
import tasks from "../reducers/rootReducer";

export default () => {
    return createStore(tasks, applyMiddleware(thunk));
};