import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeTask } from '../action/task';
 
const Task = ({ id, descripcion, fechaCreacion, vigente, dispatch }) => (
    <div>
        <Link to={`/tasks/${id}`}>
            <h4>{vigente} ({fechaCreacion})</h4>
        </Link>
        <p>vigente: {vigente}</p>
        {descripcion && <p>{descripcion}</p>}
        <button onClick={() => {
            dispatch(removeTask({ id }));
        }}>Remove</button>
    </div>
);
 
export default connect()(Task);