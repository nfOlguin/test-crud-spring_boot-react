import actionTypes from '../actionTypes';

export default {
  setInputDescripcion: descripcion => ({
    type: actionTypes.SET_INPUT_DESCRIPCION,
    descripcion,
  }),
  setInputVigente: vigente => ({
    type: actionTypes.SET_INPUT_VIGENTE,
    vigente
  }),
  setInputId: id => ({
    type: actionTypes.SET_INPUT_ID,
    id,
  }),
  resetInputs: () => ({
    type: actionTypes.RESET_INPUT,
  })
}