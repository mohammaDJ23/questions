import { Actions, ActionTypes, ShowingModal } from '../../actions/modal/types';
import { State } from './types';

const initialState: State = {
  show: false,
};

function show(state: State, action: ShowingModal) {
  return {
    ...state,
    show: action.payload.show,
  };
}

export function modalReducer(state: State = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.SHOW_MODAL:
      return show(state, action);

    default:
      return state;
  }
}
