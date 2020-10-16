import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTask} from '../actions/taskAction';
import {deleteTask} from '../actions/taskAction';
import Tasks from './Tasks';

 class TaskForm extends Component{
    state={
        task:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTask(this.state.task)
    }
    deleteTask=(id)=>{
        this.props.deleteTask(id);
    }
    render(){
        return(
             <div className="container">
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="task" placeholder="what to do today?..." onChange={this.handleChange}/>
                <button className="btn green" onClick={this.handleSubmit}>Add task!</button>
            </form>
            <Tasks tasks={this.props.tasks} deleteTask={this.deleteTask}/>
            </div>
        )   
       
    }

}

const mapStateToProps=(state)=>{
    console.log('state',state);
    return{
        tasks:state
    }
}
export default connect(mapStateToProps,{addTask,deleteTask})(TaskForm);