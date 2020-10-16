import actionTypes from '../actionTypes';

const initialState = {
  id: -1,
  descripcion: '',
  fechaCreacion:'',
  vigente: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_INPUT_DESCRIPCION: {
      const { descripcion } = action;
      return {
        ...state,
        descripcion,
      }
    }

    case actionTypes.SET_INPUT_FECHA_CREACION: {
      const { fechaCreacion } = action;
      return {
        ...state,
        fechaCreacion,
      }
    }

    case actionTypes.SET_INPUT_VIGENTE: {
      const { vigente } = action;
      return {
        ...state,
        vigente,
      }
    }
    case actionTypes.SET_INPUT_ID: {
      const { id } = action;
      return {
        ...state,
        id,
      }
    }
    case actionTypes.RESET_INPUT: {
      return initialState;
    }
    default:
      return state;
  }
}