import React from 'react';
import './TaskItem.styles.scss';

const TaskItem = ({ descripcion, vigente, onItemClicked}) => {
  return (
    <div
      className="TaskItem__container"
      role="button"
      onClick={onItemClicked}
    >
      <h2>{descripcion}</h2>
      <p>{vigente}</p>
    </div>
  );
};

export default TaskItem;
