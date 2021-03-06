import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import taskActions from '../redux/actions/taskActions';
import inputActions from '../redux/actions/inputActions';
import './inputSection.style.scss';

const InputSection = () => {
  const id = useSelector(state => state.inputs.id);
  const descripcion = useSelector(state => state.inputs.descripcion);
  const fechaCreacion = useSelector(state => state.inputs.fechaCreacion);
  const vigente = useSelector(state => state.inputs.vigente);
  const dispatch = useDispatch();

  const addTask = () => {
    if(descripcion && vigente) {
      dispatch(taskActions.addTask({
        descripcion,
        vigente
      }))
      dispatch(inputActions.resetInputs())
    }
  }

  const updateTask = () => {
    if(descripcion && vigente) {
      dispatch(taskActions.updateTask(id, {
        descripcion, vigente
      }))
      dispatch(inputActions.resetInputs())
    }    
  }

  const deleteTask = () => {
    dispatch(taskActions.deleteTask(id))
    dispatch(inputActions.resetInputs())
  }

  const options = [
    { value: 'true', label: 'activa' },
    { value: 'false', label: 'inactiva' }
  ]

  return (
    <div className="InputSection__container">
      <input
        type="text"
        placeholder="Define tu tarea..."
        value={descripcion}
        onChange={e => 
          dispatch(inputActions.setInputDescripcion(e.target.value))
        }
      />    

      <textarea
        placeholder="Vigente?"
        value={vigente}
        onChange={e => 
          dispatch(inputActions.setInputVigente(e.target.value))
        }
      ></textarea>



      
      <div className="InputSection__container__btnWrapper">
        <button onClick={id === -1 ? addTask : updateTask}>
          {id === -1 ? "ADD TASK" : "UPDATE TASK"}
        </button>      
        {id !== -1 &&
          <button
            onClick={deleteTask}
            style={{ marginLeft: '1em', backgroundColor: 'red' }}
          >
            DELETE TASK
          </button>
        }
      </div>
    </div>
  );
};

export default InputSection;
