import { Actions, ActionTypes, GetQuestions } from '../../actions/questions/types';
import { State } from './types';

const initialState: State = {
  questions: [],
};

function getQuestions(state: State, action: GetQuestions) {
  return {
    ...state,
  };
}

export function questionsReducer(state: State = initialState, actions: Actions) {
  switch (actions.type) {
    case ActionTypes.GET_QUESTIONS:
      return getQuestions(state, actions);

    default:
      return state;
  }
}
