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
    dispatch(inputActions.setInputDescripcion(item.descripcion));
    dispatch(inputActions.setInputVigente(item.vigente));
  }

  if(tasks.length === 0) {
    return (
      <div className="TasksSection__container__empty">
        <p>
          No hay tareas para mostrar, agrega una!</p>
      </div>  
    )
  }

  return (
    <div className="TasksSection__container">
     
    {tasks.map((item, index) => {
        if(item) {
          return (
            <TaskItem
              descripcion={item.descripcion}
              fechaCreacion={item.fechaCreacion}
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
