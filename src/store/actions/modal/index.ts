import { ActionTypes } from './types';

export function showModal(show: boolean) {
  return {
    type: ActionTypes.SHOW_MODAL,
    payload: { show },
  };
}
