import React from 'react';

const Tasks=({tasks,deleteTask})=>{
    if(tasks.length==0)
    return(
        <p>No tasks for today!</p>
    )
    else{
    return(
    <div>
    <ul className="collection">
            {
                tasks.map(task=>{
                   return(
                       
                         <li key={task.id} className="collection-items">
                        <div className="task">
                        {task.task}
                        <span onClick={(id)=>{deleteTask(task.id)}}>X</span>
                        </div>
                    </li> 
                   )  
                })
            }
        </ul>
    </div>
    )
        }

}

export default Tasks;