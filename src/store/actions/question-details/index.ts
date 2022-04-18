import { ActionTypes } from './types';

export function like() {
  return {
    type: ActionTypes.LIKE,
  };
}

export function disLike() {
  return {
    type: ActionTypes.DISLIKE,
  };
}

export function getQuestion() {
  return {
    type: ActionTypes.GET_QUESTION,
  };
}
