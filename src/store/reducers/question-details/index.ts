import { Actions, ActionTypes, DisLike, Like } from '../../actions/question-details/types';
import { State } from './types';

const initialState: State = {
  question: {},
};

function like(state: State, action: Like) {
  return {
    ...state,
  };
}

function disLike(state: State, action: DisLike) {
  return {
    ...state,
  };
}

export function questionDetailsReducer(state: State = initialState, actions: Actions) {
  switch (actions.type) {
    case ActionTypes.LIKE:
      return like(state, actions);

    case ActionTypes.DISLIKE:
      return disLike(state, actions);

    default:
      return state;
  }
}
