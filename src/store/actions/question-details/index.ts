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
