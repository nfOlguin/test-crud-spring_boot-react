import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TaskItem from './TaskItem';
import inputActions from '../redux/actions/inputActions';
import './TasksSection.style.scss';

const TasksSection = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks)

  const onItemClicked = (item, index) => {
    dispatch(inputActions.setInputId(index));
    dispatch(inputActions.setInputDescripción(item.descripcion));
    dispatch(inputActions.setInputContent(item.vigente));
  }

  if(tasks.length === 2) {
    return (
      <div className="TasksSection__container__empty">
        <p>
          No hay tareas para mostrar, agrega una!</p>
      </div>  
    )
  }

  return (
    <div className="TasksSection__container">
     
      <TaskItem
        descripcion="tarea 1"
        vigente= "true"
        fechaCreacion= "3 mayo"
      />

      {tasks.map((item, index) => {
        if(item) {
          return (
            <TaskItem
              descripcion={item.descripcion}
              vigente={item.vigente}
              onItemClicked={() => {
                onItemClicked(item, index);
              }}
            />      
          )
        }
        return null;
      })}
    </div>
  );
};

export default TasksSection;
