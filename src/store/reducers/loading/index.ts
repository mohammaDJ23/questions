import { Actions, Error, Loading, Success, ActionTypes } from '../../actions/loading/types';
import { State } from './types';

const initialState: State = {
  loadings: {},
  errors: {},
};

function loading(state: State, action: Loading) {
  const { loading } = action.payload;

  return {
    ...state,

    loadings: {
      ...state.loadings,

      [loading]: true,
    },

    errors: {},
  };
}

function error(state: State, action: Error) {
  const { loading, error } = action.payload;

  return {
    ...state,

    loadings: {
      ...state.loadings,

      [loading]: false,
    },

    errors: {
      ...state.errors,

      [loading]: error,
    },
  };
}

function success(state: State, action: Success) {
  const { loading } = action.payload;

  return {
    ...state,

    loadings: {
      ...state.loadings,

      [loading]: false,
    },

    errors: {},
  };
}

export function loadingReducer(state: State = initialState, actions: Actions) {
  switch (actions.type) {
    case ActionTypes.LOADING:
      return loading(state, actions);

    case ActionTypes.ERROR:
      return error(state, actions);

    case ActionTypes.SUCCESS:
      return success(state, actions);

    default:
      return state;
  }
}
