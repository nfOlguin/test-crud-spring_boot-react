import React from 'react';
import './TaskItem.styles.scss';

const TaskItem = ({ descripcion, fechaCreacion, vigente, onItemClicked}) => {
  return (
    <div
      className="TaskItem__container"
      role="button"
      onClick={onItemClicked}
    >
      <h4>{descripcion}</h4>
      <p>{fechaCreacion}</p>
      <p>{vigente}</p>
    </div>
  );
};

export default TaskItem;
