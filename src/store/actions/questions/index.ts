import { ActionTypes } from './types';

export function getQuestions() {
  return {
    type: ActionTypes.GET_QUESTIONS,
  };
}
